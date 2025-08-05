import { type ResponseImage } from '@/actions/r2-actions';
import { create } from 'zustand';

type PhotoStoreState = {
  photoUrl: string;
  activePhotoUrl: string;
  togglePhotoDialog: () => void;
  isDialogOpen: boolean;
  setActivePhotoUrl: (url: string) => void;
  carouselPhotos?: ResponseImage[] | null;
  setCarouselPhotos: (photos?: ResponseImage[] | null) => void;
};

const usePhotoStore = create<PhotoStoreState>((set, get) => ({
  photoUrl: '',
  activePhotoUrl: '',
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
  setActivePhotoUrl: (url: string) => set({ activePhotoUrl: url })
}));

export default usePhotoStore;
