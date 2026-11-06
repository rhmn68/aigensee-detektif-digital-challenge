import React from 'react';
import logoPusbuk from '../../../assets/logo-jenama.webp?v2';
import bgJudul from '../../../assets/background judul.webp';
import { InteractiveGridBg } from '../../components/InteractiveGridBg';
import { AudioToggle } from '../../components/AudioToggle';

interface SplashPageProps {
  onStart: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function SplashPage({ onStart, isMuted, onToggleAudio }: SplashPageProps) {
  return (
    <div id="splash-page" className="min-h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden select-none animate-fadeIn cursor-none">
      <img
        id="splash-background"
        src={bgJudul}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <InteractiveGridBg />

      {/* Top Left: Logo Pusbuk */}
      <div id="splash-logo" className="absolute top-3 left-3 sm:top-5 sm:left-5 z-40 shrink-0">
        <img
          src={logoPusbuk}
          alt="Logo Pusbuk"
          className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)]"
        />
      </div>

      {/* Top Right: Mute / Unmute Button */}
      <div id="splash-audio-toggle" className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 shrink-0">
        <AudioToggle
          id="splash-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
        />
      </div>

      <div id="splash-content" className="relative z-30 w-full flex flex-col items-center px-4 pb-[16vh] md:pb-[18vh]  pt-[20vh] md:pt-[24vh]">
        <h1
          id="splash-title"
          className="animate-float-title text-center text-[clamp(2rem,7vw,6rem)] 2xl:text-8xl font-black leading-tight text-[#FA6E00] mb-20 md:mb-28 2xl:mb-60 [text-shadow:0_3px_0_white,0_-3px_0_white,3px_0_0_white,-3px_0_0_white,0_8px_0_#38455B]"
        >
          Detektif Digital
        </h1>

        <button
          id="splash-start-button"
          type="button"
          onClick={onStart}
          aria-label="Mulai Penyelidikan"
          className="cursor-pointer bg-transparent border-0 p-0 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6E00] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full relative z-40"
        >
          <span className="animate-float-button block rounded-full border-4 border-white bg-[#FA6E00] px-8 py-3 sm:px-12 sm:py-4 text-xl sm:text-3xl font-black text-white shadow-ink">
            Mulai
          </span>
        </button>
      </div>
    </div>
  );
}
