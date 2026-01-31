"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "../store/useAppStore";
import { tableOfContents, albumData, getTrackUrl } from "../data/albumData";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import {BiFoodMenu} from "react-icons/bi";
import {MdOutlineMenuBook} from "react-icons/md";

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { language, setCurrentPage, currentPage } = useAppStore();

  const handleSelectPage = (pageIndex) => {
    setCurrentPage(pageIndex);
    router.push(getTrackUrl(pageIndex), { scroll: false });
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex justify-end">
      {/* 목차 아이콘 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded transition-colors"
        aria-label="목차 열기"
        aria-expanded={isOpen}
      >
        <MdOutlineMenuBook className="w-6 h-6" />
      </button>

      {/* 모달 오버레이 */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* 목차 모달 */}
          <div
            className="fixed right-4 top-20 w-80 max-h-[70vh] bg-white rounded-lg shadow-xl z-50 overflow-hidden"
            role="dialog"
            aria-label="목차"
            onKeyDown={handleKeyDown}
          >
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="font-bold text-lg">
                {language === "ko"
                  ? "목차"
                  : language === "en"
                    ? "Contents"
                    : "目次"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="목차 닫기"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>

            {/* 목차 목록 */}
            <div className="overflow-y-auto max-h-[calc(70vh-60px)]">
              {tableOfContents.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectPage(index)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 ${
                    currentPage === index ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {item.id}. {item.title[language]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
