"use client";

import { useEffect, useRef, useState } from "react";

export const useAudioPlayer = (audioUrl, volume, isMuted) => {
  const currentAudioRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const pendingAudioUrl = useRef(null);

  // 사용자 상호작용 감지
  useEffect(() => {
    const handleInteraction = () => {
      setHasUserInteracted(true);
      // 대기 중인 오디오가 있으면 재생
      if (pendingAudioUrl.current && currentAudioRef.current) {
        currentAudioRef.current.play().catch(console.error);
      }
      // 이벤트 리스너 제거
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  // 오디오 URL 변경 시 크로스페이드
  useEffect(() => {
    if (!audioUrl) return;

    const fadeOutDuration = 1000;
    const fadeInDuration = 1000;
    const steps = 20;

    // 새 오디오 준비
    const newAudio = new Audio(audioUrl);
    newAudio.volume = 0;
    newAudio.loop = true;

    const playNewAudio = () => {
      const targetVolume = isMuted ? 0 : volume;

      newAudio
          .play()
          .then(() => {
            setIsPlaying(true);
            pendingAudioUrl.current = null;

            let fadeInStep = 0;
            const fadeInInterval = setInterval(() => {
              fadeInStep++;
              const progress = fadeInStep / steps;
              newAudio.volume = Math.min(targetVolume, targetVolume * progress);

              if (fadeInStep >= steps) {
                newAudio.volume = targetVolume;
                clearInterval(fadeInInterval);
                setIsTransitioning(false);
              }
            }, fadeInDuration / steps);
          })
          .catch((err) => {
            console.log("Audio autoplay blocked, waiting for user interaction");
            pendingAudioUrl.current = audioUrl;
            setIsPlaying(false);
          });
    };

    // 이전 오디오가 있으면 크로스페이드
    if (currentAudioRef.current && currentAudioRef.current.src) {
      setIsTransitioning(true);
      const oldAudio = currentAudioRef.current;
      const oldStartVolume = oldAudio.volume;

      // Fade out 이전 트랙
      let fadeOutStep = 0;
      const fadeOutInterval = setInterval(() => {
        fadeOutStep++;
        const progress = fadeOutStep / steps;
        oldAudio.volume = Math.max(0, oldStartVolume * (1 - progress));

        if (fadeOutStep >= steps) {
          clearInterval(fadeOutInterval);
          oldAudio.pause();
          oldAudio.currentTime = 0;
        }
      }, fadeOutDuration / steps);

      // 사용자 상호작용이 있었으면 바로 재생
      if (hasUserInteracted) {
        playNewAudio();
      } else {
        pendingAudioUrl.current = audioUrl;
        newAudio.volume = isMuted ? 0 : volume;
      }
    } else {
      // 첫 재생
      newAudio.volume = isMuted ? 0 : volume;
      if (hasUserInteracted) {
        playNewAudio();
      } else {
        pendingAudioUrl.current = audioUrl;
      }
    }

    currentAudioRef.current = newAudio;

    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
    };
  }, [audioUrl, hasUserInteracted]);

  // 볼륨 변경
  useEffect(() => {
    if (currentAudioRef.current && !isTransitioning) {
      currentAudioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, isTransitioning]);

  return {
    currentAudio: currentAudioRef.current,
    isTransitioning,
    isPlaying,
    hasUserInteracted,
  };
};