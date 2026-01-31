"use client";

import Image from "next/image";
import { useAppStore } from "../store/useAppStore";
import { albumData } from "../data/albumData";

// 화자 이름 컴포넌트
function Speaker({ name }) {
  return <h3 className="text-3xl font-bold mt-12 mb-12 text-black">{name}</h3>;
}

// 텍스트 컴포넌트 (줄바꿈 지원)
function Text({ value }) {
  if (!value) {
    return <div className="h-4" />; // 빈 줄
  }

  // 줄바꿈이 있는 경우 분리해서 렌더링
  const lines = value.split("\n");

  return (
      <div
          className="mb-4 leading-relaxed text-black whitespace-pre-wrap
             text-[14px] md:text-[16px] lg:text-[18px]"
      >
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}

// 이미지 컴포넌트
function ContentImage({ imageUrl, alt }) {
  if (!imageUrl) return null;

  return (
    <div className="my-8 flex justify-center">
      <div className="relative w-full max-w-lg aspect-square">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 512px"
          priority
        />
      </div>
    </div>
  );
}

export default function ContentViewer() {
  const { currentPage, language } = useAppStore();
  const currentTrack = albumData[currentPage];

  if (!currentTrack) {
    return null;
  }

  const contentArray = currentTrack.content[language] || [];
  const title = currentTrack.title[language];

  return (
    <article
      className="py-8"
      style={{ fontFamily: "var(--font-gowun-batang), serif" }}
    >
      {contentArray.map((item, index) => {
        switch (item.type) {
          case "speaker":
            return <Speaker key={index} name={item.name} />;
          case "text":
            return <Text key={index} value={item.value} />;
          case "image":
            return <ContentImage key={index} imageUrl={item.value} alt={title} />;
          default:
            return null;
        }
      })}
    </article>
  );
}
