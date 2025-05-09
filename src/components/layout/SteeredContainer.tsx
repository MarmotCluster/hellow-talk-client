import React from 'react';

type Props = {
  direction?: 'column' | 'row';
  className?: string;
};

/**
 * @description makes every child compos into center.
 */
const SteeredContainer = (props: React.PropsWithChildren<Props>) => {
  const { children, direction, className } = props;

  return (
    <div
      className={`flexy fd-${direction || 'row'} fullscreen ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default SteeredContainer;
