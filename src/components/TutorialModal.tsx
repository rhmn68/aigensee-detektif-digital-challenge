import React, { useEffect, useRef } from 'react';

interface TutorialModalProps {
  onContinue: () => void;
}

export function TutorialModal({ onContinue }: TutorialModalProps) {
  const continueButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    continueButton.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-[#1e2633]/85 backdrop-blur-md animate-fadeIn font-sans">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutorial-title"
        className="card-ui rounded-3xl p-4 sm:p-6 w-full max-w-3xl max-h-[94dvh] overflow-y-auto border-2 border-[#FA6E00]/40 shadow-2xl"
      >
        <h2 id="tutorial-title" className="font-display text-lg sm:text-xl text-[#FA6E00] uppercase tracking-wide">
          Video Tutorial Investigasi
        </h2>
        <p className="card-text text-xs sm:text-sm mt-1 mb-4">
          Tonton tutorial berikut untuk mempersiapkan investigasimu, lalu lanjutkan ke kasus pertama.
        </p>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube-nocookie.com/embed/gTDGTF7SJdA?rel=0"
            title="Video tutorial Detektif Digital"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t card-divider">
          <a
            href="https://youtu.be/gTDGTF7SJdA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#38455B] underline underline-offset-4 hover:text-[#FA6E00]"
          >
            Buka di YouTube
          </a>
          <button
            ref={continueButton}
            type="button"
            onClick={onContinue}
            className="btn-card px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer active:scale-95 transition-transform"
          >
            Lanjut ke Investigasi
          </button>
        </div>
      </section>
    </div>
  );
}
