import React from 'react';
import { QrCode, Download, Calendar, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQR: () => void;
  onSaveContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQR, onSaveContact }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080808]/80 border-b border-white/10 px-4 sm:px-8 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-end">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenQR}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:border-[#0C579F]"
            title="View QR Code"
          >
            <QrCode className="w-4 h-4 text-[#0C579F]" />
            <span className="hidden sm:inline">QR Code</span>
          </button>

          <button
            onClick={onSaveContact}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:border-[#0C579F]"
            title="Save to Contacts"
          >
            <Download className="w-4 h-4 text-[#0C579F]" />
            <span className="hidden sm:inline">Save Contact</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#0C579F] hover:bg-[#0a4680] text-white shadow-lg shadow-[#0C579F]/25 transition-all transform hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Meeting</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
