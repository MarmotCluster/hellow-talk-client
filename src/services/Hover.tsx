import Logo from '@/components/common/Logo';
import useStoreValue from '@/hooks/useStoreValue';
import { useAuthStore } from '@/stores';
import { useState } from 'react';

const Hover = () => {
  const auth = useStoreValue(useAuthStore);

  const [display, setDisplay] = useState(true);

  if (!display) return null;

  return (
    <div
      className="absolute flexy bg-primary"
      style={{
        width: '100dvw',
        height: '100dvh',
        transition: `opacity 1s ease`,
        zIndex: 1000,
        ...(auth.status === null
          ? {}
          : {
              opacity: 0,
              userSelect: 'none',
              pointerEvents: 'none',
              touchAction: 'none',
            }),
      }}
      onTransitionEnd={() => setDisplay(false)}
    >
      <Logo />
    </div>
  );
};

export default Hover;
