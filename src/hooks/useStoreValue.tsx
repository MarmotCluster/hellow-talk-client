import type { CommonBearStore } from '@/types';
import type { StoreApi, UseBoundStore } from 'zustand';

const useStoreValue = <T,>(
  store: UseBoundStore<StoreApi<CommonBearStore<T>>>
): T => {
  const v = store((s) => s.value);

  return v;
};

export default useStoreValue;
