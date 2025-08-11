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

export default function AboutImage({ photos }: Props) {
  const [randomPhoto, setRandomPhoto] = useState<Photo | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setRandomPhoto(photos[index]);
  }, [photos]);

  if (!randomPhoto) return null;
  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] min-h-[50%] object-center object-contain"
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
      style={{ height: 'auto' }}
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] w-fit object-contain"
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
