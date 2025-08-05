'use client';

import { type ResponseImage } from '@/actions/r2-actions';
import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export default function PhotoPopup({
  carouselPhotos
}: {
  carouselPhotos?: ResponseImage[] | null;
}) {
  const {
    isDialogOpen,
    togglePhotoDialog,
    setActivePhotoUrl,
    activePhotoUrl,
    setCarouselPhotos
  } = usePhotoStore();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true
    },
    [ClassNames({ snapped: 'is-active' }), WheelGesturesPlugin()]
  );

  const handleClosePhoto = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      togglePhotoDialog();
      setActivePhotoUrl('');
      setCarouselPhotos([]);
      setIsClosing(false);
    }, 300);
  }, [togglePhotoDialog, setActivePhotoUrl, setCarouselPhotos]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !carouselPhotos) return;

    const updateActivePhoto = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      const newActivePhoto = carouselPhotos[selectedIndex];
      if (newActivePhoto?.url) {
        setActivePhotoUrl(newActivePhoto.url);
      }
    };

    emblaApi.on('select', updateActivePhoto);
    emblaApi.on('reInit', updateActivePhoto);

    // Initial sync
    const initialIndex = carouselPhotos.findIndex(
      (photo) => photo.url === activePhotoUrl
    );
    if (initialIndex !== -1) {
      emblaApi.scrollTo(initialIndex, true);
    }

    return () => {
      emblaApi.off('select', updateActivePhoto);
    };
  }, [emblaApi, carouselPhotos, activePhotoUrl, setActivePhotoUrl]);

  useEffect(() => {
    if (!isDialogOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePhoto();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDialogOpen, handleClosePhoto, handleNext, handlePrev]);

  useClickOutside(dialogRef, () => handleClosePhoto());

  if (isDialogOpen)
    return (
      <div
        className={`fixed inset-0 z-[1000] w-screen h-screen flex items-center lg:items-start justify-center bg-black/20 ${
          isClosing ? 'fade-out' : 'fade-in'
        }`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          ref={dialogRef}
          className={`grid grid-rows-1 px-1 md:px-0 lg:min-h-full max-h-[95%] py-5 justify-start`}
        >
          <div className="lg:max-w-4xl w-full mx-auto touch-none min-h-full flex items-center justify-center">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {carouselPhotos?.map((photo) => (
                  <div className="embla__slide" key={photo.url}>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      className={`object-contain w-full h-full min-h-full min-w-full`}
                      src={photo.url}
                      alt={'slider image'}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleClosePhoto()}
              className="absolute cursor-pointer rotate-90 md:hidden top-3 right-3 z-10 px-3 py-1.5"
            >
              <FontAwesomeIcon className="text-white" icon={faX} />
            </button>
          </div>
        </div>
      </div>
    );
}
