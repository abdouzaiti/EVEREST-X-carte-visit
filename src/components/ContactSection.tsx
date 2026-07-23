import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'contact@everestx.agency';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#080808] border border-white/15 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C579F]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="text-center max-w-lg mx-auto mb-10 relative z-10">
          <span className="text-xs uppercase font-mono tracking-widest text-[#0C579F] mb-2 block">Direct Access</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-sm text-[#A3A3A3]">
            Have an ambitious project in mind? Reach out to our leadership team directly via email, phone, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 relative z-10">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0C579F]/20 text-[#0C579F] border border-[#0C579F]/30 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#A3A3A3] block">Direct Email</span>
                <span className="text-sm font-semibold text-white">Inquiries</span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#0C579F]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0C579F]/20 text-[#0C579F] border border-[#0C579F]/30 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#A3A3A3] block">Phone Line</span>
                <span className="text-sm font-semibold text-white">+1 (555) 839-3789</span>
              </div>
            </div>
            <a
              href="tel:+15558393789"
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4 text-[#0C579F]" />
              <span>Call Direct</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0C579F]/20 text-[#0C579F] border border-[#0C579F]/30 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#A3A3A3] block">Headquarters</span>
                <span className="text-sm font-semibold text-white">San Francisco • London</span>
              </div>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-white/5 text-center text-xs text-[#A3A3A3] border border-white/5">
              Global Remote Team
            </div>
          </div>
        </div>

        {/* WhatsApp Direct CTA */}
        <div className="text-center relative z-10">
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat instantly on WhatsApp Business</span>
          </a>
        </div>
      </div>
    </section>
  );
};
