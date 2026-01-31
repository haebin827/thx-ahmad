"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      // 언어 설정 (ko, en, ja)
      language: "ko",
      setLanguage: (language) => set({ language }),

      // 볼륨 설정 (0.0 ~ 1.0)
      volume: 0.7,
      setVolume: (volume) => set({ volume }),

      // 음소거
      isMuted: false,
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),

      // 현재 페이지 (0 ~ 22, 인덱스 기반)
      currentPage: 0,
      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    {
      name: "album-storage",
      partialize: (state) => ({
        language: state.language,
        volume: state.volume,
        isMuted: state.isMuted,
      }),
    }
  )
);
