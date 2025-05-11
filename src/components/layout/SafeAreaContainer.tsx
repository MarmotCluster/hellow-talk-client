import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

type SafeAreaContainerProps = {};

const SafeAreaContainer = (
  props: React.PropsWithChildren<SafeAreaContainerProps>
) => {
  const { children } = props;

  /* stores */

  const location = useLocation();

  /* states */

  const [backgroundCls, setBackgroundCls] = useState(
    location.pathname === '/chat' ? 'bg-grey' : 'bg-primary'
  );

  /* effects */

  useEffect(() => {
    const abort = () => {
      setBackgroundCls('bg-primary');
    };

    if (location.pathname !== '/chat') return abort;

    setBackgroundCls('bg-grey');

    return abort;
  }, [location.pathname]);

  /* renders */

  return (
    <div
      className={`full-width full-mheight display-flex justify-center ${backgroundCls}`}
    >
      <div className="relative parent-w" style={{ maxWidth: 480 }}>
        {children}
      </div>
    </div>
  );
};

export default SafeAreaContainer;
