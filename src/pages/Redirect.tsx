import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login', { replace: true });
  }, []);

  return null;
};

export default Redirect;
