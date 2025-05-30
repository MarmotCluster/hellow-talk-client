import React from 'react';

type GroupChatIconProps = {
  color?: React.CSSProperties['color'];
};

const GroupChatIcon = (props: GroupChatIconProps) => {
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
        d="M12 3C17.5 3 22 6.58 22 11C22 11.58 21.92 12.14 21.78 12.68C21.19 12.38 20.55 12.16 19.88 12.06C19.96 11.72 20 11.36 20 11C20 7.69 16.42 5 12 5C7.58 5 4 7.69 4 11C4 14.31 7.58 17 12 17L13.09 16.95L13 18L13.08 18.95L12 19C10.81 19 9.62 18.83 8.47 18.5C6.64 20 4.37 20.89 2 21C4.33 18.67 4.75 17.1 4.75 16.5C3.91501 15.8422 3.23557 15.0081 2.7602 14.0574C2.28483 13.1067 2.02525 12.0627 2 11C2 6.58 6.5 3 12 3ZM18 14H20V17H23V19H20V22H18V19H15V17H18V14Z"
        fill={color || 'white'}
      />
    </svg>
  );
};

export default GroupChatIcon;
