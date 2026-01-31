// 소셜 미디어 아이콘 컴포넌트들
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// 음원 플랫폼 아이콘 컴포넌트들
const YouTubeMusicIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
  </svg>
);

const SpotifyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleMusicIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.6-1.965-1.483-.18-.965.407-1.9 1.356-2.18.194-.057.4-.096.6-.135l1.3-.257c.267-.053.427-.194.466-.464a.803.803 0 00.01-.144c0-1.73.002-3.46-.003-5.19a.682.682 0 00-.076-.298c-.074-.137-.196-.21-.357-.18l-4.09.813c-.022.004-.043.01-.065.014-.322.08-.43.217-.44.55-.002.058 0 .117 0 .175-.005 2.373-.003 4.747-.007 7.12 0 .418-.042.833-.207 1.222-.298.708-.878 1.137-1.63 1.28-.326.063-.658.098-.99.098-.905-.003-1.68-.614-1.878-1.467-.196-.84.21-1.716 1.002-2.083.236-.11.49-.18.747-.228l1.283-.253c.31-.06.477-.226.507-.54.005-.045.005-.09.005-.136V7.27c0-.16.018-.32.06-.474.093-.343.32-.54.66-.627.18-.046.367-.078.552-.108l5.77-1.143c.19-.038.383-.066.577-.085.222-.022.384.093.455.3.035.1.05.204.05.31v4.67z"/>
  </svg>
);

const MelonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const GenieIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const BugsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M9 9h2v6H9zm4 0h2v6h-2z"/>
  </svg>
);

const FloIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M10 8l6 4-6 4V8z"/>
  </svg>
);

const VibeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M7 14h2v3H7zm4-5h2v8h-2zm4 2h2v6h-2z"/>
  </svg>
);

const musicPlatforms = [
  { name: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_l-CYQPlHh8uAOCVvZ7T_NoKxDbsgmLylw", icon: YouTubeMusicIcon },
  { name: "Spotify", href: "https://open.spotify.com/album/4FmnyUnbADlSSVhaGOvawa", icon: SpotifyIcon },
  { name: "Apple Music", href: "https://music.apple.com/kr/album/thx-ahmad/1854081329", icon: AppleMusicIcon },
  { name: "Melon", href: "https://www.melon.com/album/detail.htm?albumId=12409654", icon: MelonIcon },
  { name: "Genie", href: "https://www.genie.co.kr/detail/albumInfo?axnm=86961276", icon: GenieIcon },
  { name: "Bugs", href: "https://music.bugs.co.kr/album/20771041?wl_ref=list_ab_01_ab", icon: BugsIcon },
  { name: "FLO", href: "https://www.music-flo.com/detail/album/446077240/albumtrack", icon: FloIcon },
  { name: "VIBE", href: "https://vibe.naver.com/album/35765083", icon: VibeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 음원 사이트 링크들 - 상단 중앙 정렬 */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4 md:gap-6 mb-8">
          {musicPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.href} target="_blank"
                className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label={`${platform.name}에서 듣기`}
                title={platform.name}
              >
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6 md:gap-8">
          {/* 로고 + 주소 + 소셜 영역 */}
          <div>
            <span className="text-xl font-bold">YANCEY CLUB</span>
            <div className="text-sm text-gray-400 mt-3">
              <p>대한민국 창전동 402-17번지</p>
              <p>B동 101호 세방테크빌</p>
              <p>마포구 서울특별시 KR</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/yanceyclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@yanceyclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 굿즈 메뉴 링크 */}
          <div className="md:text-right">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSffTWrKtMMVhUEVH5VlyNtHu4kD8MWhWJVkkRpUB3J9y9voDQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-2"
            >
              정규 1집 굿즈 [고마워요, 아마드 (THX, AHMAD!) ] 북/키링 판매 (2차)
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
