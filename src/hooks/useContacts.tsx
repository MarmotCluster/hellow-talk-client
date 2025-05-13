import server from '@/configs/server';
import type { ActualContact, UserStatus } from '@/types';
import { request } from '@/utils';

const useContacts = () => {
  const getFriends = async (
    userId?: number,
    username?: string,
    status?: UserStatus,
    ignoreToast = false
  ) => {
    return await request(
      () =>
        server.get<{
          hasNext: boolean;
          cursorId: string;
          data: ActualContact[];
        }>(`/api/friends`, {
          params: { userId, username, status },
        }),
      ignoreToast
    );
  };

  return { getFriends };
};

export default useContacts;
