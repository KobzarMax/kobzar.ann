'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { type ResponseImage } from '@/actions/r2-actions';

type Props = {
  photos?: ResponseImage[] | null;
};

export default function AboutImage({ photos }: Props) {
  const [randomPhoto, setRandomPhoto] = useState<ResponseImage | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const index = Math.floor(
      Math.random() * (photos && photos?.length > 0 ? photos.length : 1)
    );
    setRandomPhoto(photos ? photos[index] : null);
  }, [photos]);

  if (!randomPhoto) return null;

  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] object-center object-contain"
      src={randomPhoto.url}
      alt={randomPhoto.key}
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
      alt={randomPhoto.key}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  );
}
