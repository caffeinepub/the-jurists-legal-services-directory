import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export default function LegalNoticeBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-black text-white border-b border-gray-700 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2 flex-1">
          <AlertCircle className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-gray-300 leading-relaxed">
            <span className="font-semibold text-white uppercase tracking-wide">Legal Disclaimer: </span>
            The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this site. Please consult a qualified advocate for advice specific to your situation. As per Bar Council of India rules, advocates are not permitted to solicit work or advertise.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Dismiss legal notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
