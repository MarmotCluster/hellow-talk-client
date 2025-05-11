import type { CommonBearStore } from '@/types';
import { create } from 'zustand';

type Variants = 'general' | 'create-group';

export const useButtonGroupStore = create<CommonBearStore<Variants>>((set) => ({
  value: 'general',
  setter: (action) =>
    set((state) => {
      if (typeof action === 'function') {
        const value = action(state.value);
        return { value };
      }
      return { value: action };
    }),
}));
