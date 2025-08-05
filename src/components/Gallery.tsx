'use client';

import GalleryItem from './GalleryItem';
import { useMemo, useState, useEffect, useRef } from 'react';
import { type ResponseImage } from '@/actions/r2-actions';

type Props = { photos?: ResponseImage[] | null };

export default function Gallery({ photos }: Props) {
  const [visibleCount, setVisibleCount] = useState<number>(50);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const columns = useMemo(() => {
    if (!photos) return [[], [], []];
    const c = [[], [], []] as ResponseImage[][];
    photos.slice(0, visibleCount).forEach((photo, index) => {
      c[index % 3].push(photo);
    });
    return c;
  }, [photos, visibleCount]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            // Load 30 more photos, but don’t exceed total photos
            const next = Math.min(prev + 30, photos ? photos.length : 1);
            return next;
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [photos, visibleCount]);

  return (
    <div className="container py-5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {columns.map((column, idx) => (
        <div key={idx} className="flex-1 flex flex-col gap-4">
          {column.map((photo) => {
            return <GalleryItem key={photo.key} photo={photo} />;
          })}
        </div>
      ))}

      {/* Sentinel div to trigger loading more */}
      {photos && visibleCount < photos.length && (
        <div ref={loadMoreRef} className="h-1" />
      )}
    </div>
  );
}
