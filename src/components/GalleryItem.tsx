'use client';

import Image from 'next/image';
import usePhotoStore from '@/store/photoStore';
import { type ResponseImage } from '@/actions/r2-actions';

export type GalleryItemProps = {
  photo: ResponseImage;
};

export default function GalleryItem({ photo }: GalleryItemProps) {
  const { togglePhotoDialog, setActivePhotoUrl } = usePhotoStore();

  const handleOpenPhoto = (id: string) => {
    setActivePhotoUrl(id);
    togglePhotoDialog();
  };

  return (
    <button
      className={`flex border-transparent cursor-zoom-in appearBlock items-center relative justify-center`}
    >
      <Image
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
        src={photo.url}
        alt={photo.key}
        unoptimized
        onClick={() => handleOpenPhoto(photo.url)}
      />
    </button>
  );
}
