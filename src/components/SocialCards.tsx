import React from 'react';
import { SocialLink } from '../types';
import { 
  Instagram, 
  Linkedin, 
  Dribbble, 
  Palette, 
  Youtube, 
  Video, 
  Facebook, 
  MessageSquare, 
  Mail, 
  Globe, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

interface SocialCardsProps {
  links: SocialLink[];
  onSelectLink: (link: SocialLink) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Linkedin,
  Dribbble,
  Palette,
  Youtube,
  Video,
  Facebook,
  MessageSquare,
  Mail,
  Globe,
};

export const SocialCards: React.FC<SocialCardsProps> = ({ links, onSelectLink }) => {
  return (
    <section className="py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Connect & Explore
        </h2>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => {
          const IconComponent = iconMap[link.iconName] || Globe;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // If it's email or whatsapp, we can also handle custom actions or just let default behavior work
                // But let's add a sleek click interaction or feedback
              }}
              className="group relative p-5 rounded-2xl bg-[#121212]/80 backdrop-blur-xl border border-white/10 hover:border-[#0C579F] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#0C579F]/15 flex items-center justify-between overflow-hidden"
            >
              {/* Subtle blue accent glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C579F]/0 via-[#0C579F]/5 to-[#0C579F]/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#0C579F] group-hover:border-[#0C579F] transition-all duration-300 shadow-md">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white tracking-wide group-hover:text-[#0C579F] transition-colors">
                      {link.title}
                    </h3>

                  </div>
                  <p className="text-xs text-[#A3A3A3] line-clamp-1 group-hover:text-white/80 transition-colors">
                    {link.description}
                  </p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A3A3A3] group-hover:bg-white group-hover:text-[#080808] transition-all duration-300 relative z-10 flex-shrink-0 ml-3">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
