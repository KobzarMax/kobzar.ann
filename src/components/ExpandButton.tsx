'use client';

import usePhotoStore from '@/store/photoStore';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExpandButton({ photoUrl }: { photoUrl: string }) {
  const { togglePhotoDialog, setHomePhotoUrl } = usePhotoStore();

  const handleOpenPhoto = () => {
    setHomePhotoUrl(photoUrl);
    togglePhotoDialog();
  };

  return (
    <button
      className="absolute cursor-pointer bottom-3 right-3 px-3 py-1.5"
      type="button"
      onClick={() => handleOpenPhoto()}
    >
      <FontAwesomeIcon className="text-black" icon={faExpand} />
    </button>
  );
}
