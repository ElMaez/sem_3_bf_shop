"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Placeholder from "@/app/assets/img/placeholder.png";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // State til de små billeder
  const [duplicatedImages, setDuplicatedImages] = useState([]);

  // useEffect bruges til fetch
  useEffect(() => {
    if (images && images.length > 0) {
      // Tjekker og opretter et array med det første billede fra API'et og to placeholders
      setDuplicatedImages([images[0], Placeholder, Placeholder]);
      // Starter med billedet fra API'et :D
      setSelectedImage(images[0]);
    } else {
      setDuplicatedImages([]);
      setSelectedImage(null);
    } //hvis der mangler data
  }, [images]);

  if (!duplicatedImages || duplicatedImages.length === 0) {
    return <p>No picture available</p>;
  }

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-center items-center mb-4">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Product picture"
            className="object-contain max-w-full max-h-[500px]"
            width={500}
            height={500}
          />
        )}
      </div>
      <div className="flex flex-row gap-2 overflow-auto">
        {duplicatedImages.map((imgUrl, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(imgUrl)}
            className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer transition-opacity duration-300 shadow-md ${
              selectedImage === imgUrl
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={imgUrl}
              alt={`Miniature ${index + 1}`}
              fill
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
