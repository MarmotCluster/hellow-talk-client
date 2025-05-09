type ChatsIconProps = {
  active?: boolean;
};

const ChatsIcon = (props: ChatsIconProps) => {
  const { active } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.6 12C21.6 16.6392 17.3016 20.4 12 20.4C10.2961 20.4072 8.61547 20.0038 7.10042 19.224L2.40002 20.4L4.00562 16.6524C2.99162 15.3204 2.40002 13.7208 2.40002 12C2.40002 7.36078 6.69842 3.59998 12 3.59998C17.3016 3.59998 21.6 7.36078 21.6 12ZM8.40002 10.8H6.00002V13.2H8.40002V10.8ZM18 10.8H15.6V13.2H18V10.8ZM10.8 10.8H13.2V13.2H10.8V10.8Z"
          fill="#2552F4"
        />
      ) : (
        <path
          d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5288 20.0038 9.0752 19.6796 7.745 19.051L3 20L4.395 16.28C3.512 15.042 3 13.574 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z"
          stroke="#999999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export default ChatsIcon;
