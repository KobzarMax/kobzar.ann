'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExpandButton from './ExpandButton';
import { type RenderPhotoType } from '@/api';

export type GalleryItemProps = {
  photo: RenderPhotoType;
};

export default function GalleryItem({ photo }: GalleryItemProps) {
  const [isLandscape, setIsLandscape] = useState(false);

  return (
    <div
      className={`flex appearBlock items-center relative justify-center ${isLandscape ? 'col-full-span' : 'col-span-1'}`}
    >
      <Image
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
        src={photo.url}
        alt={photo.name}
        onLoad={(img) => {
          setIsLandscape(
            img.currentTarget.naturalWidth > img.currentTarget.naturalHeight
          );
        }}
      />
      <ExpandButton photoUrl={photo.url} />
    </div>
  );
}
