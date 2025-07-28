import { type RenderPhotoType } from '@/api';
import { create } from 'zustand';

type PhotoStoreState = {
  photoUrl: string;
  homePhotoUrl: string;
  togglePhotoDialog: () => void;
  isDialogOpen: boolean;
  setHomePhotoUrl: (url: string) => void;
  carouselPhotos?: RenderPhotoType[];
  setCarouselPhotos: (photos: RenderPhotoType[]) => void;
};

const usePhotoStore = create<PhotoStoreState>((set, get) => ({
  photoUrl: '',
  homePhotoUrl: '',
  isDialogOpen: false,
  carouselPhotos: [],
  setCarouselPhotos: (photos) => set({ carouselPhotos: photos }),
  togglePhotoDialog: () => {
    const { isDialogOpen } = get();

    if (!isDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    set((state) => ({ isDialogOpen: !state.isDialogOpen }));
  },
  setPhotoUrl: (url: string) => set({ photoUrl: url }),
  setHomePhotoUrl: (url: string) => set({ homePhotoUrl: url })
}));

export default usePhotoStore;
