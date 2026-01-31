import { redirect } from "next/navigation";
import { getTrackUrl } from "./data/albumData";

export default function Home() {
  // 첫 번째 트랙으로 리다이렉트
  redirect(getTrackUrl(0));
}
