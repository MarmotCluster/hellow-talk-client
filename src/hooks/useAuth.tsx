import server from '@/configs/server';
import { request } from '@/utils';

const useAuth = () => {
  const login = async (username: string, password: string) => {
    return await request(() =>
      server.post<void>(`/api/auth/login`, { username, password })
    );
  };

  const register = async (name: string, username: string, password: string) => {
    return await request(() =>
      server.post<{ id: number }>(`/api/users`, {
        name,
        username,
        password,
      })
    );
  };

  const logout = async () => {
    return await request(() => server.post<void>(`/api/auth/logout`));
  };

  return { login, register, logout };
};

export default useAuth;
