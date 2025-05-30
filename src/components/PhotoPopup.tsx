'use client';

import usePhotoStore from '@/store/photoStore';
import { useClickOutside } from '@/utils/client';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRef } from 'react';

export default function PhotoPopup() {
  const { isDialogOpen, homePhotoUrl, togglePhotoDialog, setHomePhotoUrl } =
    usePhotoStore();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClosePhoto = () => {
    togglePhotoDialog();
    setHomePhotoUrl('');
  };

  useClickOutside(dialogRef, () => handleClosePhoto());

  if (isDialogOpen)
    return (
      <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-center justify-center bg-black/20">
        <div
          ref={dialogRef}
          className={`flex items-center max-w-md lg:max-w-3xl max-h-[85%] relative justify-center`}
        >
          <button
            onClick={() => handleClosePhoto()}
            className="absolute cursor-pointer top-3 right-3 px-3 py-1.5 bg-white/30 hover:bg-white/100"
          >
            <FontAwesomeIcon className="text-black" icon={faX} />
          </button>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            className="max-h-[85%]"
            style={{ width: '100%', height: 'auto' }}
            src={homePhotoUrl}
            alt={'photoUrl'}
          />
        </div>
      </div>
    );
}
