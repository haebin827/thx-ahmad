"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import TableOfContents from "../../components/TableOfContents";
import ContentViewer from "../../components/ContentViewer";
import AudioPlayer from "../../components/AudioPlayer";
import { useAppStore } from "../../store/useAppStore";
import { useKeyboardNav } from "../../hooks/useKeyboardNav";
import { findTrackIndex } from "../../data/albumData";

export default function TrackPage() {
  const params = useParams();
  const { setCurrentPage } = useAppStore();

  // URL 파라미터에서 페이지 설정 (id + title 조합으로 찾기)
  useEffect(() => {
    const index = findTrackIndex(params.id, params.title);
    setCurrentPage(index);
  }, [params.id, params.title, setCurrentPage]);

  // 키보드 네비게이션
  useKeyboardNav();

  return (
    <>
      {/* 오디오 플레이어 (UI 없음) */}
      <AudioPlayer />

      {/* Navbar */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="min-h-screen md:pt-30 pt-25 md:pb-30 pb-25">
        <div className="max-w-3xl mx-auto px-4">
          {/* Pagination */}
          <Pagination />

          {/* 목차 아이콘 */}
          <TableOfContents />

          {/* 글/그림 영역 */}
          <ContentViewer />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
