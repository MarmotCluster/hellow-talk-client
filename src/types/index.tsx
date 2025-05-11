import type React from 'react';

export type UseStateTuple<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export type CommonBearStore<T> = {
  value: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
};
