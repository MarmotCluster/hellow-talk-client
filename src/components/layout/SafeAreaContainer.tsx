import React from 'react';

type SafeAreaContainerProps = {};

const SafeAreaContainer = (
  props: React.PropsWithChildren<SafeAreaContainerProps>
) => {
  const { children } = props;

  return (
    <div className="full-width full-mheight display-flex justify-center bg-primary">
      <div className="relative parent-w" style={{ maxWidth: 480 }}>
        {children}
      </div>
    </div>
  );
};

export default SafeAreaContainer;
