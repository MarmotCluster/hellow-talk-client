import type { AxiosError, AxiosResponse } from 'axios';
import type React from 'react';

export type UseStateTuple<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export type CommonBearStore<T> = {
  value: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
};

export type RequestResult<T = any, U = any> = Promise<
  AxiosResponse<T, U> | AxiosError<any, any> | null
>;

export type UserStatus = 'ACCEPTED' | 'PENDING' | 'REJECTED' | 'BLOCKED';

export type ActualContact = {
  friendId: number;
  userId: number;
  username: string;
  name: string;
  status: UserStatus;
  onlineStatus: boolean;
};

export type ActualRoom = {
  roomId: number;
  type: 'DIRECT' | 'GROUP';
  roomName: string;
  lastMessageContent: string;
  lastActivityAt: string;
};
