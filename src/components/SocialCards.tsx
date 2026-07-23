import React, { useState } from 'react';
import { SocialLink } from '../types';
import { 
  Globe, 
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';

interface SocialCardsProps {
  links: SocialLink[];
  onSelectLink: (link: SocialLink) => void;
}

// Authentic Brand Logo SVGs
const BrandLogos: Record<string, React.ReactNode> = {
  instagram: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  ),
  whatsapp: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  email: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
};

const brandGradients: Record<string, string> = {
  instagram: 'from-[#fdf497] via-[#fd5949] to-[#d6249f]',
  whatsapp: 'from-[#25D366] to-[#128C7E]',
  email: 'from-[#0C579F] to-[#1D4ED8]',
};

export const SocialCards: React.FC<SocialCardsProps> = ({ links, onSelectLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Connect & Explore
        </h2>
        <p className="text-sm text-[#A3A3A3]">Direct channels to our official platforms</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {links.map((link) => {
          const brandKey = link.id.toLowerCase();
          const gradientClass = brandGradients[brandKey] || 'from-[#0C579F] to-[#083a6b]';
          const logoElement = BrandLogos[brandKey] || <Globe className="w-6 h-6 text-white" />;
          const isEmail = brandKey === 'email';

          return (
            <a
              key={link.id}
              href={isEmail ? '#' : link.url}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              onClick={isEmail ? (e) => handleCopyEmail(e, 'everestx27@gmail.com') : undefined}
              className="group relative p-6 rounded-2xl bg-[#121212]/90 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-between overflow-hidden cursor-pointer"
            >
              {/* Brand Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  {logoElement}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                      {link.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A3A3A3] line-clamp-1 group-hover:text-white/90 transition-colors font-medium">
                    {isEmail && copied ? 'Copied to clipboard!' : link.description}
                  </p>
                </div>
              </div>

              {isEmail ? (
                <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 relative z-10 flex-shrink-0 ml-3 shadow-md ${
                  copied 
                    ? 'bg-emerald-500 text-white border-emerald-400' 
                    : 'bg-white/5 border-white/10 text-white group-hover:bg-white group-hover:text-[#080808]'
                }`}>
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A3A3A3] group-hover:bg-white group-hover:text-[#080808] transition-all duration-300 relative z-10 flex-shrink-0 ml-3 shadow-md">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

