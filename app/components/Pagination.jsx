"use client";

import { useAppStore } from "../store/useAppStore";
import { albumData, TOTAL_PAGES, getTrackUrl } from "../data/albumData";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Pagination() {
  const router = useRouter();
  const { currentPage, setCurrentPage, language } = useAppStore();

  const currentTrack = albumData[currentPage];
  const title = currentTrack?.id + '. ' + currentTrack?.title[language] || "";

  const isFirst = currentPage === 0;
  const isLast = currentPage === TOTAL_PAGES - 1;

  const goToPage = (page) => {
    setCurrentPage(page);
    router.push(getTrackUrl(page), { scroll: false });
  };

  const goToPreviousPage = () => {
    if (!isFirst) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isLast) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {!isFirst ? (
        <button
          onClick={goToPreviousPage}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="이전 페이지"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-10" />
      )}

      <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center max-w-[280px] sm:max-w-md truncate">
        {title}
      </h1>

      {!isLast ? (
        <button
          onClick={goToNextPage}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="다음 페이지"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-10" />
      )}
    </div>
  );
}
