import type { ActualContact, ActualRoom, CommonBearStore } from '@/types';
import { create } from 'zustand';

type Auth = {
  status: null | boolean;
  contacts: ActualContact[];
  rooms: ActualRoom[];
};

export const useAuthStore = create<CommonBearStore<Auth>>((set) => ({
  value: {
    status: null,
    contacts: [],
    rooms: [],
  },
  setter: (action) =>
    set((state) => {
      if (typeof action === 'function') {
        const value = action(state.value);
        return { value };
      }
      return { value: action };
    }),
}));
