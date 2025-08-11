'use client';

import { useState } from 'react';
import Image from 'next/image';

type Photo = {
  url: string;
  name: string;
};

type Props = {
  randomPhoto: Photo;
};

export default function VerticalRandomPhoto({ randomPhoto }: Props) {
  const [isLandscape, setIsLandscape] = useState(false);

  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] aspect-[3/4] min-h-[50%] object-center object-cover"
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
      className="max-h-[calc(100dvh-84px)] min-h-full object-cover"
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
