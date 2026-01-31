"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "../store/useAppStore";
import { TOTAL_PAGES } from "../data/albumData";

export const useKeyboardNav = () => {
  const router = useRouter();
  const { currentPage, setCurrentPage } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 입력 필드에서는 무시
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          if (currentPage > 0) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            router.push(`/?page=${prevPage}`, { scroll: false });
          }
          break;
        case "ArrowRight":
          if (currentPage < TOTAL_PAGES - 1) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            router.push(`/?page=${nextPage}`, { scroll: false });
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, setCurrentPage, router]);
};
