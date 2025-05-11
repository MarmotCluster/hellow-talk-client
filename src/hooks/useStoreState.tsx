import type { CommonBearStore, UseStateTuple } from '@/types';
import type { StoreApi, UseBoundStore } from 'zustand';
import { useShallow } from 'zustand/shallow';

const useStoreState = <T,>(
  store: UseBoundStore<StoreApi<CommonBearStore<T>>>
): UseStateTuple<T> => {
  const [state, setState] = store(useShallow((s) => [s.value, s.setter]));

  return [state, setState];
};

export default useStoreState;
