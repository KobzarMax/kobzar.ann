'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type ResponseImage } from '@/actions/r2-actions';

type Props = {
  randomPhoto?: ResponseImage | null;
};

export default function VerticalRandomPhoto({ randomPhoto }: Props) {
  const [isLandscape, setIsLandscape] = useState(false);

  return isLandscape ? (
    <Image
      fill
      sizes="100vw"
      loading="lazy"
      className="max-h-[calc(100dvh-84px)] object-center object-cover"
      src={randomPhoto?.url ?? ''}
      alt={randomPhoto?.key ?? ''}
      unoptimized
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
      unoptimized
      className="max-h-[calc(100dvh-84px)] min-h-full object-cover"
      src={randomPhoto?.url ?? ''}
      alt={randomPhoto?.key ?? ''}
      onLoad={(img) => {
        setIsLandscape(
          img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
        );
      }}
    />
  );
}
