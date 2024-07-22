"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FileUploadForm } from "../FileUploadForm/FileUploadForm";

interface Image {
  url: string;
  key: string;
}

export const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleImageUpload = (image: { url: string; key: string }) => {
    console.log("image", image);
    setImages((prevImages) => [...prevImages, image]);
  };

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

  const handleLoadingComplete = (key: string) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div>
      <FileUploadForm onImageUpload={handleImageUpload} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map((image) => (
          <Image
            key={image.key}
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
            onLoadingComplete={() => handleLoadingComplete(image.key)}
          />
        ))}
      </div>
    </div>
  );
};
