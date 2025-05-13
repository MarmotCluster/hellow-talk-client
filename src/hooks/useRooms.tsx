import server from '@/configs/server';
import type { ActualRoom } from '@/types';
import { request } from '@/utils';

const useRooms = () => {
  const getRooms = async (userId?: number, username?: string) => {
    return await request(() =>
      server.get<{
        hasNext: boolean;
        cursorId: string;
        data: ActualRoom[];
      }>(`/api/rooms`, {
        params: { userId, username },
      })
    );
  };

  return { getRooms };
};

export default useRooms;
