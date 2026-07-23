import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-white/10 bg-[#080808] text-center relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">


        <h3 className="text-xl font-black text-white tracking-widest mb-1">EVEREST X</h3>
        <p className="text-xs text-[#0C579F] font-mono tracking-widest uppercase mb-6">
          Create • Grow • Elevate
        </p>

        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0C579F] text-white flex items-center justify-center border border-white/10 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-[#A3A3A3] space-y-1">
          <p>© {new Date().getFullYear()} EVEREST X Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
