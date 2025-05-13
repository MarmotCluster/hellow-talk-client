import type { RequestResult } from '@/types';
import { AxiosError, type AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

/** @description implemented since android chrome does not supports `crypto` in local html file. */
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/** @description get valid uuidv4. */
export const randomUUID = (): string => {
  if (crypto?.randomUUID) {
    const result = crypto.randomUUID();

    // ... uuid may not appear
    // ... since the function will be overwritten by injection in react-native
    if (result) {
      return result;
    }
  }

  return uuidv4();
};

/**
 * @description common reponse wrapper
 * commonly used in hooks.
 */
export const request = async <T = any, U = any>(
  req: () => Promise<AxiosResponse<T, U>>,
  ignoreToast = false
): RequestResult<T, U> => {
  try {
    const data = await req();
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (!ignoreToast) toast.error(err.response?.data.message ?? err.message);
      return err;
    }
  }
  return null;
};

/**
 * @description determine the following behave by response.
 */
export const behave = async <T = any, U = any>(
  req: () => RequestResult<T, U>,
  onSuccess?: (data: AxiosResponse<T, U>) => void,
  onFail?: (err: AxiosError<any, any>) => void
) => {
  const res = await req();

  if (res instanceof AxiosError) {
    onFail?.(res);
    return;
  }

  onSuccess?.(res as AxiosResponse<T, U>);
};
