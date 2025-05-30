import { getPhotos } from '@/api';
import GalleryItem from './GalleryItem';

export default async function Gallery() {
  const renderingPhotos = await getPhotos();

  return (
    <div
      className={`container py-5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`}
    >
      {renderingPhotos.length > 0 ? (
        renderingPhotos.map((photo) => (
          <GalleryItem key={photo.id} photo={photo} />
        ))
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
}
