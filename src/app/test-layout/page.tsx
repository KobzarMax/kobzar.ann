import VerticalRandomPhoto from '@/components/VerticalImage';

const horizontalPhotos = [
  {
    url: '/test1.jpg',
    name: 'Landscape 1'
  },
  {
    url: '/test2.jpg',
    name: 'Landscape 2'
  }
];

export default function TestLayout() {
  return (
    <main className="bg-white grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 h-[calc(100dvh-84px)]">
      {horizontalPhotos.map((photo, idx) => (
        <div key={idx} className="relative max-h-[calc(100dvh-84px)]">
          <VerticalRandomPhoto randomPhoto={photo} />
        </div>
      ))}
    </main>
  );
}
