import { Info, X } from "lucide-react";
import React, { useState } from "react";

const DISMISSED_KEY = "legal_notice_dismissed";

export default function LegalNoticeBanner() {
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(DISMISSED_KEY) === "true";
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(DISMISSED_KEY, "true");
    } catch {
      // ignore storage errors
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="bg-black text-white border-b-2 border-gray-600 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3 flex-1">
          <Info className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-gray-300 leading-relaxed">
            <span className="font-bold text-white uppercase tracking-wide">
              Important Notice — Bar Council of India Rules:{" "}
            </span>
            This website is published for{" "}
            <span className="text-white font-semibold">
              informational purposes only
            </span>{" "}
            and does <span className="text-white font-semibold">not</span>{" "}
            constitute legal advice, a legal opinion, or solicitation of
            clients. No attorney-client relationship is created by accessing or
            using this website. The information provided here should not be
            relied upon as a substitute for professional legal advice specific
            to your situation. As per the Bar Council of India Rules, advocates
            are not permitted to solicit work or advertise. By proceeding, you
            acknowledge that you are seeking information of your own accord.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 ml-2"
          aria-label="Dismiss legal notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
