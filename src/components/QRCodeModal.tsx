import React from 'react';
import { X, QrCode, Download, Share2, Compass, Check } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'EVEREST X - Digital Business Card',
        text: 'Check out EVEREST X Creative Digital Agency',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-sm rounded-3xl bg-[#121212] border border-white/20 p-6 sm:p-8 text-center shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#0C579F]/20 blur-[60px] pointer-events-none rounded-full" />

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#0C579F]" />
            <span className="font-bold text-white text-sm">EVEREST X QR</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* QR Code Container Mock */}
        <div className="w-48 h-48 mx-auto bg-white p-4 rounded-2xl shadow-2xl mb-6 flex flex-col items-center justify-center relative border-4 border-white">
          <div className="w-full h-full bg-black rounded-lg flex items-center justify-center p-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0C579F] to-blue-600 opacity-90 flex items-center justify-center">
              <div className="text-center">
                <QrCode className="w-20 h-20 text-white mx-auto mb-1 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-white uppercase block">Scan to Open</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-1">Scan to Share</h3>
        <p className="text-xs text-[#A3A3A3] mb-6">
          Point your smartphone camera at the physical or digital card to instantly load this portal.
        </p>

        <div className="space-y-2.5 relative z-10">
          <button
            onClick={handleShare}
            className="w-full py-3 rounded-xl bg-[#0C579F] hover:bg-[#0a4680] text-white text-xs font-semibold tracking-wide shadow-lg shadow-[#0C579F]/30 transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Link Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share Digital Card</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
