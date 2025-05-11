import type { CommonBearStore } from '@/types';
import { randomUUID } from '@/utils';
import { create } from 'zustand';

type MyProfile = {
  [key: string]: any;
  /** uuid */
  id: string;
  /** name */
  name: string;
  /** `online` or `offline` */
  status: 'online' | 'offline';
  /** statistics */
  statistics: Record<'friends' | 'chats' | 'groups', number>;
};

const value: MyProfile = {
  id: randomUUID(),
  name: 'Jane Doe',
  status: 'online',
  statistics: {
    friends: 24,
    chats: 8,
    groups: 0,
  },
};

export const useMyProfileStore = create<CommonBearStore<MyProfile>>((set) => ({
  value,
  setter: (action) =>
    set((state) => {
      if (typeof action === 'function') {
        const value = action(state.value);
        return { value };
      }
      return { value: action };
    }),
}));
