import { getPhotos } from '@/api';
import Gallery from '@/components/Gallery';
import PhotoPopup from '@/components/PhotoPopup';

export default async function PortfolioPage() {
  const renderingPhotos = await getPhotos();

  const reversedPhotos = [...renderingPhotos].reverse();

  return (
    <main className="bg-white">
      <Gallery photos={reversedPhotos} />
      <PhotoPopup carouselPhotos={reversedPhotos} />
    </main>
  );
}
