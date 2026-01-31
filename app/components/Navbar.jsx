"use client";

import { useAppStore } from "../store/useAppStore";
import { albumData } from "../data/albumData";
import VolumeControl from "./VolumeControl";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const { currentPage, language } = useAppStore();
  const currentTrack = albumData[currentPage];
  const currentTitle = currentTrack.trackNumber + '. ' + currentTrack?.title[language] || "";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* 왼쪽: 로고 */}
        <div className="flex-shrink-0">
          <span className="text-base sm:text-xl font-bold">THX, AHMAD!</span>
        </div>

        {/* 오른쪽: 볼륨, 현재 트랙, 언어 전환 */}
        <div className="flex items-center gap-2 sm:gap-4">
          <VolumeControl />
          <span className="hidden sm:block text-xs sm:text-sm text-gray-600 max-w-24 sm:max-w-32 truncate">
            {currentTitle}
          </span>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
