import { fetchAllImages } from '@/actions/r2-actions';
import Gallery from '@/components/Gallery';
import PhotoPopup from '@/components/PhotoPopup';
import { Fragment } from 'react';

export default async function PortfolioPage() {
  const { images: fetchedImages } = await fetchAllImages();

  return (
    <Fragment>
      <main className="bg-white">
        <Gallery photos={fetchedImages} />
      </main>
      <PhotoPopup carouselPhotos={fetchedImages} />
    </Fragment>
  );
}
