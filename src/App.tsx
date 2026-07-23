import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SocialCards } from './components/SocialCards';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QRCodeModal } from './components/QRCodeModal';
import { socialLinks } from './data';
import { SocialLink } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mouse spotlight coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSaveContact = () => {
    // Generate vCard
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:EVEREST X Creative Agency
ORG:EVEREST X
TITLE:Creative Digital Agency
TEL:+15558393789
EMAIL:contact@everestx.agency
URL:https://everestx.agency
NOTE:Building bold brands, modern digital experiences, and scalable solutions.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Everest_X_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setToastMessage('Contact vCard downloaded successfully!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExplorePortfolio = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative overflow-x-hidden selection:bg-[#0C579F] selection:text-white">
      {/* Mouse Spotlight Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40 hidden sm:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(12, 87, 159, 0.15), transparent 80%)`,
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#121212] border border-[#0C579F] text-white text-xs shadow-2xl animate-fadeIn">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}



      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Social & Professional Links */}
        <SocialCards
          links={socialLinks}
          onSelectLink={(link: SocialLink) => {
            // Optional custom handler if needed
          }}
        />


      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <QRCodeModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
      />
    </div>
  );
}
