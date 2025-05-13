import useContacts from '@/hooks/useContacts';
import useStoreState from '@/hooks/useStoreState';
import { useAuthStore } from '@/stores';
import { behave } from '@/utils';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const ACCESS_FORBIDDEN_ON_SIGNED_IN = new Set(['/', '/sign-up']);

const AuthContext = () => {
  /* stores */

  const [_, setAuth] = useStoreState(useAuthStore);

  /* hooks */

  const navigate = useNavigate();

  const location = useLocation();

  const { getFriends } = useContacts();

  /* effects */

  useEffect(() => {
    behave(
      () => getFriends(undefined, undefined, undefined, true),
      () => {
        if (ACCESS_FORBIDDEN_ON_SIGNED_IN.has(location.pathname)) {
          navigate('/contacts', { replace: true });
        }
        setAuth((v) => ({ ...v, status: true }));
      },
      () => {
        if (!ACCESS_FORBIDDEN_ON_SIGNED_IN.has(location.pathname)) {
          navigate('/', { replace: true });
        }
        setAuth((v) => ({ ...v, status: false }));
      }
    );
  }, []);

  return null;
};

export default AuthContext;
