'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Photo = {
  url: string;
  name: string;
};

type Props = {
  photos: Photo[];
};

export default function VerticalRandomPhoto({ photos }: Props) {
  const [randomPhoto, setRandomPhoto] = useState<Photo | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setRandomPhoto(photos[index]);
  }, [photos]);

  if (!randomPhoto) return null; // Or return a loader / skeleton

  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] object-center object-cover"
      src={randomPhoto.url}
      alt={randomPhoto.name}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  ) : (
    <Image
      width={0}
      height={0}
      style={{ width: '100%', height: 'auto' }}
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] object-cover"
      src={randomPhoto.url}
      alt={randomPhoto.name}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  );
}
