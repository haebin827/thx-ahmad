"use client";

import { useAppStore } from "../store/useAppStore";

const languages = [
  { code: "ko", label: "한" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日" },
];

export default function LanguageSwitch() {
  const { language, setLanguage } = useAppStore();

  return (
    <div className="flex gap-1" role="group" aria-label="언어 선택">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            language === lang.code
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700/* hover:bg-gray-300*/"
          }`}
          aria-pressed={language === lang.code}
          aria-label={`${lang.label} 언어로 변경`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
