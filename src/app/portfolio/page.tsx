import { getPhotos } from '@/api';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import PhotoPopup from '@/components/PhotoPopup';
import { Fragment } from 'react';

export default async function PortfolioPage() {
  const renderingPhotos = await getPhotos();

  return (
    <Fragment>
      <main className="bg-white">
        <Gallery photos={renderingPhotos} />
        <PhotoPopup />
      </main>
      <Footer />
    </Fragment>
  );
}
