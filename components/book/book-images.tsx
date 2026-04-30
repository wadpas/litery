"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BookImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-75 rounded-lg object-cover object-center"
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div
            className={cn(
              "m-2 hover:cursor-pointer",
              currentImage === index && "ring-primary rounded-lg ring-1",
            )}
            key={index}
          >
            <Image
              key={index}
              src={image}
              alt={`product image ${index + 1}`}
              width={200}
              height={200}
              className="min-h-25 rounded-lg object-cover object-center"
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookImages;
