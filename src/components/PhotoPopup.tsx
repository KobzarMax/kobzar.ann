'use client';

import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';

export default function PhotoPopup() {
  const { isDialogOpen, homePhotoUrl, togglePhotoDialog, setHomePhotoUrl } =
    usePhotoStore();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClosePhoto = useCallback(() => {
    togglePhotoDialog();
    setHomePhotoUrl('');
  }, [togglePhotoDialog, setHomePhotoUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePhoto();
    };
    if (isDialogOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDialogOpen, handleClosePhoto]);

  useClickOutside(dialogRef, () => handleClosePhoto());

  if (isDialogOpen)
    return (
      <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-center justify-center bg-black/20">
        <div
          ref={dialogRef}
          className={`grid grid-rows-1 px-1 md:px-0 lg:max-w-3xl max-h-[95%] relative justify-center`}
        >
          <button
            onClick={() => handleClosePhoto()}
            className="absolute cursor-pointer rotate-90 md:hidden top-3 right-3 px-3 py-1.5"
          >
            <FontAwesomeIcon className="text-white" icon={faX} />
          </button>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className="object-contain row-span-1"
            style={{ width: '100%', height: '100%' }}
            src={homePhotoUrl}
            alt={'photoUrl'}
          />
        </div>
      </div>
    );
}
