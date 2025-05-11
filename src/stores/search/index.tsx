import type { CommonBearStore } from '@/types';
import { create } from 'zustand';

export const usePrimarySearchStore = create<CommonBearStore<string>>((set) => ({
  value: '',
  setter: (action) =>
    set((state) => {
      if (typeof action === 'function') {
        const value = action(state.value);
        return { value };
      }
      return { value: action };
    }),
}));
