import React from 'react';

type Props = {
  color?: React.CSSProperties['color'];
};

const Icon = (props: Props) => {
  const { color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      x="0px"
      y="0px"
      width="44px"
      height="44px"
      viewBox="0 0 44 44"
    >
      <defs>
        <g id="primary">
          <path
            fill={color || '#2552f4'}
            stroke="none"
            d=" M 35 22 Q 35 17.25 31.2 13.85 30.35 13.1 29.4 12.55 26.15 10.5 22 10.5 16.6 10.5 12.8 13.85 9 17.25 9 22 9 25.45 10.95 28.15 L 9 33.5 16.7 32.55 Q 19.1 33.5 22 33.5 26.75 33.5 30.3 30.9 30.75 30.55 31.2 30.15 35 26.8 35 22 M 22 24.5 Q 21.15 24.5 20.55 23.95 20 23.35 20 22.5 20 21.65 20.55 21.1 21.15 20.5 22 20.5 22.85 20.5 23.4 21.1 24 21.7 24 22.5 24 23.35 23.4 23.95 22.85 24.5 22 24.5 M 29.4 23.95 Q 28.85 24.5 28 24.5 27.15 24.5 26.55 23.95 26 23.35 26 22.5 26 21.65 26.55 21.1 27.15 20.5 28 20.5 28.85 20.5 29.4 21.1 30 21.7 30 22.5 30 23.35 29.4 23.95 M 14.55 23.95 Q 14 23.35 14 22.5 14 21.65 14.55 21.1 15.15 20.5 16 20.5 16.85 20.5 17.4 21.1 18 21.7 18 22.5 18 23.35 17.4 23.95 16.85 24.5 16 24.5 15.15 24.5 14.55 23.95 Z"
          />
        </g>
      </defs>

      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        <use xlinkHref="#primary" />
      </g>
    </svg>
  );
};

export default Icon;
