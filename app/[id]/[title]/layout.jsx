import { albumData, findTrackIndex } from "../../data/albumData";

export async function generateMetadata({ params }) {
  const { id, title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const index = findTrackIndex(id, title);
  const track = albumData[index];

  if (!track) {
    return {
      title: "THX, AHMAD! - YANCEY CLUB",
      description: "멀티미디어 앨범 - 음악, 글, 그림",
    };
  }

  return {
    title: `Track ${track.id} | ${decodedTitle}`,
    description: `${track.id}번 트랙의 글과 음악`,
    openGraph: {
      title: `Track ${track.id} | ${decodedTitle}`,
      description: `${track.id}번 트랙의 글과 음악`,
      type: "music.song",
    },
  };
}

export default function TrackLayout({ children }) {
  return <>{children}</>;
}
