'use client';

import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Keyboard, Mousewheel } from 'swiper/modules';
import { type RenderPhotoType } from '@/api';

export default function PhotoPopup({
  carouselPhotos
}: {
  carouselPhotos?: RenderPhotoType[] | null;
}) {
  const {
    isDialogOpen,
    togglePhotoDialog,
    setHomePhotoUrl,
    setActivePhotoUrl,
    activePhotoUrl
  } = usePhotoStore();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClosePhoto = useCallback(() => {
    togglePhotoDialog();
    setHomePhotoUrl('');
    setActivePhotoUrl('');
  }, [togglePhotoDialog, setHomePhotoUrl, setActivePhotoUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePhoto();
    };
    if (isDialogOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDialogOpen, handleClosePhoto]);

  useClickOutside(dialogRef, handleClosePhoto);

  const initialSlideIndex = useMemo(() => {
    if (!carouselPhotos || !activePhotoUrl) return 0;
    const idx = carouselPhotos.findIndex(
      (photo) => photo.url === activePhotoUrl
    );
    return idx >= 0 ? idx : 0;
  }, [carouselPhotos, activePhotoUrl]);

  if (isDialogOpen)
    return (
      <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-start justify-center bg-black/20">
        <div
          ref={dialogRef}
          className={`grid grid-rows-1 px-1 md:px-0 lg:min-h-full max-h-[95%] pt-[4.5rem] lg:pt-5 py-5 relative justify-start`}
        >
          <Swiper
            slidesPerView={1}
            centeredSlides
            key={initialSlideIndex}
            initialSlide={initialSlideIndex}
            keyboard={{
              enabled: true
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
              thresholdDelta: 50
            }}
            touchRatio={1}
            threshold={20}
            longSwipes={false}
            loop={false}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Mousewheel, Keyboard]}
            className="swiper lg:max-w-4xl w-full mx-auto flex items-start justify-center reviews-swiper relative"
          >
            {carouselPhotos?.map((photo) => (
              <SwiperSlide
                key={photo.id}
                className="swiper-slide !grid relative w-full !h-fit"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  className="object-contain row-span-1 max-h-[99vh]"
                  style={{ width: '100%', height: '100%' }}
                  src={photo.url}
                  alt={photo.name}
                />
                <button
                  onClick={() => handleClosePhoto()}
                  className="absolute cursor-pointer rotate-90 md:hidden top-2 right-1.5 z-10 px-3 py-1.5"
                >
                  <FontAwesomeIcon className="text-white" icon={faX} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}
