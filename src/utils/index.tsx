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
