"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Image {
  url: string;
  key: string;
}

export const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/s3", {
          method: "GET",
        });

        const data = await response.json();

        setImages(data.images);

        console.log("data", data.status);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchImages();
  }, []);

  console.log("images", images);

  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      {images.map((image) => (
        <div
          key={image.key}
          className="after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0"
        >
          <Image
            src={image.url}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            alt="Uploaded image"
            width={720}
            height={480}
            style={{ transform: "translate3d(0, 0, 0)" }}
            sizes="(max-width: 640px) 100vw,
        (max-width: 1280px) 50vw,
        (max-width: 1536px) 33vw,
        25vw"
          />
        </div>
      ))}
    </div>
  );
};
