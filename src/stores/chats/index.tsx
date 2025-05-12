import type { CommonBearStore } from '@/types';
import { randomUUID } from '@/utils';
import { create } from 'zustand';
import dummyChats from '@/assets/dummychats.json';

export type ChatItem = {
  [key: string]: any;
  /** uuid */
  id: string;
  /** name */
  name: string;
  /** latest updated at */
  latestUpdatedAt: string;
  /** message */
  message: string;
  /** count of people */
  members: number;
};

const value = dummyChats.contents.map(
  (v) => ({ ...v, id: randomUUID() } as ChatItem)
);

export const useChatsStore = create<CommonBearStore<ChatItem[]>>((set) => ({
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
