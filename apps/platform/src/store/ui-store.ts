import { create } from 'zustand';

interface UIState {
  isCommandPaletteOpen: boolean;
  toggleCommandPalette: () => void;
  setCommandPalette: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCommandPaletteOpen: false,
  toggleCommandPalette: () => set((state) => ({ isCommandPaletteOpen: !state.isCommandPaletteOpen })),
  setCommandPalette: (open) => set({ isCommandPaletteOpen: open }),
}));
