// 원형 아이콘 컴포넌트
const CircleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const musicPlatforms = [
  { name: "YouTube Music", href: "#" },
  { name: "Spotify", href: "#" },
  { name: "Apple Music", href: "#" },
  { name: "Melon", href: "#" },
  { name: "Genie", href: "#" },
  { name: "Bugs", href: "#" },
  { name: "FLO", href: "#" },
  { name: "VIBE", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 음원 사이트 링크들 - 상단 중앙 정렬 */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
          {musicPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-colors"
              aria-label={`${platform.name}에서 듣기`}
              title={platform.name}
            >
              <CircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 로고 영역 */}
          <div>
            <span className="text-xl font-bold">ALBUM</span>
          </div>

          {/* 정보 영역 (추후 구현) */}
          <div>{/* placeholder */}</div>

          {/* 링크 영역 (추후 구현) */}
          <div>{/* placeholder */}</div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          &copy; 2025 All rights reserved.
        </div>
      </div>
    </footer>
  );
}
