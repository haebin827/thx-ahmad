"use client";

import { useAppStore } from "../store/useAppStore";
import { albumData } from "../data/albumData";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

export default function AudioPlayer() {
  const { currentPage, volume, isMuted } = useAppStore();
  const currentTrack = albumData[currentPage];
  const audioUrl = currentTrack?.audioUrl || "";

  // 오디오 플레이어 훅 사용
  useAudioPlayer(audioUrl, volume, isMuted);

  // 이 컴포넌트는 UI 없이 오디오 재생만 담당
  return null;
}
