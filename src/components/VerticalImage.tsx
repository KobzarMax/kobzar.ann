'use client';

import { useState } from 'react';
import Image from 'next/image';

type Photo = {
  url: string;
  name: string;
};

type Props = {
  photos: Photo[];
};

export default function VerticalRandomPhoto({ photos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * photos.length);
  });
  const [triedIndices, setTriedIndices] = useState<Set<number>>(new Set());

  const currentPhoto = photos[currentIndex];

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;

    const isLandscape = naturalWidth > naturalHeight;

    if (isLandscape) {
      // Add current index to tried set
      setTriedIndices((prev) => new Set(prev).add(currentIndex));

      // Find next untried index
      const nextIndex = photos.findIndex(
        (_, idx) => !triedIndices.has(idx) && idx !== currentIndex
      );

      if (nextIndex !== -1) {
        setCurrentIndex(nextIndex);
      } else {
        console.warn('No vertical photo found.');
      }
    }
  };

  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] object-center object-cover"
      style={{ width: '100%', height: 'auto' }}
      src={currentPhoto.url}
      alt={currentPhoto.name}
      onLoad={handleLoad}
    />
  );
}
