"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import TableOfContents from "./components/TableOfContents";
import ContentViewer from "./components/ContentViewer";
import AudioPlayer from "./components/AudioPlayer";
import { useAppStore } from "./store/useAppStore";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import { albumData, TOTAL_PAGES } from "./data/albumData";

function HomeContent() {
  const searchParams = useSearchParams();
  const { currentPage, setCurrentPage, language } = useAppStore();

  // URL에서 페이지 파라미터 읽기
  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam !== null) {
      const page = parseInt(pageParam, 10);
      if (page >= 0 && page < TOTAL_PAGES && page !== currentPage) {
        setCurrentPage(page);
      }
    }
  }, [searchParams, setCurrentPage, currentPage]);

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

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
