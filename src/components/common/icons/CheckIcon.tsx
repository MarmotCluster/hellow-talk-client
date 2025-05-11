import React from 'react';

type CheckIconProps = { color?: React.CSSProperties['color'] };

const CheckIcon = (props: CheckIconProps) => {
  const { color } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L8.95 16.95L19.557 6.34302"
        stroke={color || '#F4F4F4'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
