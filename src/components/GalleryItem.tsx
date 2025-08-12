'use client';

import Image from 'next/image';
import { type RenderPhotoType } from '@/api';
import usePhotoStore from '@/store/photoStore';

export type GalleryItemProps = {
  photo: RenderPhotoType;
  carouselPhotos: RenderPhotoType[];
};

export default function GalleryItem({
  photo,
  carouselPhotos
}: GalleryItemProps) {
  const { togglePhotoDialog, setActivePhotoUrl, setCarouselPhotos } =
    usePhotoStore();

  const handleOpenPhoto = (id: string) => {
    setActivePhotoUrl(id);
    setCarouselPhotos(carouselPhotos);
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
        alt={photo.name}
        onClick={() => handleOpenPhoto(photo.url)}
      />
    </button>
  );
}
