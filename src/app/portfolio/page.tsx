import { getPhotos } from '@/api';
import Gallery from '@/components/Gallery';
import PhotoPopup from '@/components/PhotoPopup';

export default async function PortfolioPage() {
  const renderingPhotos = await getPhotos();

  return (
    <main className="bg-white">
      <Gallery photos={renderingPhotos} />
      <PhotoPopup carouselPhotos={renderingPhotos} />
    </main>
  );
}
