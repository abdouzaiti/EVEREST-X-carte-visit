import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Lightning } from './Lightning';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  return (
    <section className="relative pt-16 pb-32 px-4 sm:px-8 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background soft blue lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0C579F]/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Lightning Animation Background for the whole section */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Lightning xOffset={0} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center mt-[-4rem] sm:mt-0">
        {/* Logo Image */}
        <div className="mb-8 flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="EVEREST X Logo" 
            className="w-40 h-40 sm:w-56 sm:h-56 object-contain drop-shadow-[0_20px_45px_rgba(12,87,159,0.5)]"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-0">
          Building bold brands, modern digital experiences, and scalable solutions for ambitious companies worldwide.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="https://everest-x.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0C579F] hover:bg-[#0a4680] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#0C579F]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide border border-white/15 hover:border-[#0C579F] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-[#0C579F]" />
            <span>Book a Meeting</span>
          </button>
        </div>
      </div>

      {/* Premium Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity z-20"
           onClick={() => {
             window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
           }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#A3A3A3] font-semibold">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1 bg-[#080808]/80 backdrop-blur-md">
          <div className="w-1.5 h-2.5 bg-[#0C579F] rounded-full animate-bounce shadow-[0_0_8px_rgba(12,87,159,0.8)]" />
        </div>
      </div>
    </section>
  );
};

