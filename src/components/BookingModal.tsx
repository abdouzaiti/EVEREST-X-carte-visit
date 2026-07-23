import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { servicesList } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: servicesList[0].title,
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Everest X! I'd like to book a consultation.\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n` +
      `Date: ${form.date}\n` +
      (form.notes ? `Notes: ${form.notes}` : '')
    );
    const whatsappUrl = `https://wa.me/213559391211?text=${text}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', service: servicesList[0].title, date: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#121212] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0C579F]/20 blur-[80px] pointer-events-none rounded-full" />

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0C579F] flex items-center justify-center text-white shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Book a Consultation</h3>
              <p className="text-xs text-[#A3A3A3]">Schedule a 30-min strategy session with EVEREST X</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 relative z-10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Consultation Confirmed!</h4>
            <p className="text-sm text-[#A3A3A3] max-w-sm mx-auto">
              Thank you, <span className="text-white font-medium">{form.name}</span>. We have sent a calendar invite and secure meeting link to <span className="text-white font-medium">{form.email}</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#0C579F] text-white text-xs font-semibold hover:bg-[#0a4680] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-medium text-[#A3A3A3] mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0C579F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A3A3A3] mb-1">Work Email</label>
              <input
                type="email"
                required
                placeholder="sarah@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0C579F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A3A3A3] mb-1">Primary Interest / Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm focus:outline-none focus:border-[#0C579F] transition-colors"
              >
                {servicesList.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A3A3A3] mb-1">Preferred Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0C579F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#A3A3A3] mb-1">Project Brief / Notes (Optional)</label>
              <textarea
                rows={3}
                placeholder="Tell us briefly about your goals or challenges..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0C579F] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0C579F] hover:bg-[#0a4680] text-white font-semibold text-sm shadow-lg shadow-[#0C579F]/30 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm & Book Consultation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
