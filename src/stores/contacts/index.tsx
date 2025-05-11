import type { CommonBearStore } from '@/types';
import { randomUUID } from '@/utils';
import { create } from 'zustand';
import dummyContacts from '@/assets/dummycontacts.json';

export type ContactItem = {
  [key: string]: any;
  /** uuid */
  id: string;
  /** name */
  name: string;
  /** `online` or `offline` */
  status: 'online' | 'offline';
};

const value = dummyContacts.contents.map(
  (v) => ({ ...v, id: randomUUID() } as ContactItem)
);

export const useContactsStore = create<CommonBearStore<ContactItem[]>>(
  (set) => ({
    value,
    setter: (action) =>
      set((state) => {
        if (typeof action === 'function') {
          const value = action(state.value);
          return { value };
        }
        return { value: action };
      }),
  })
);

export const useSelectedContactsStore = create<CommonBearStore<Set<string>>>(
  (set) => ({
    value: new Set(),
    setter: (action) =>
      set((state) => {
        if (typeof action === 'function') {
          const value = action(state.value);
          return { value };
        }
        return { value: action };
      }),
  })
);
