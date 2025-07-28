import { type RenderPhotoType } from '@/api';
import GalleryItem from './GalleryItem';

export default function Gallery({ photos }: { photos: RenderPhotoType[] }) {
  const columns = [[], [], []] as RenderPhotoType[][];
  photos.forEach((photo, index) => {
    columns[index % 3].push(photo);
  });

  return (
    <div className="container py-5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {columns.map((column, idx) => (
        <div key={idx} className="flex-1 flex flex-col gap-4">
          {column.map((photo, i) => {
            const carouselPhotos = column.slice(i, i + 10);
            return (
              <GalleryItem
                carouselPhotos={carouselPhotos}
                key={photo.id}
                photo={photo}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
