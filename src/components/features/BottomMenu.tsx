import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ChatsIcon from '../common/icons/ChatsIcon';
import ContactsIcon from '../common/icons/ContactsIcon';
import ProfileIcon from '../common/icons/ProfileIcon';

type BottomMenuProps = {};

const HIDE_ON_PATH = new Set(['/login', '/sign-up']);

const BottomMenu = (props: BottomMenuProps) => {
  const {} = props;

  /* stores */

  const location = useLocation();

  const navigate = useNavigate();

  /* functions */

  const isCurrentMenu = useCallback(
    (name: string) => {
      return location.pathname.indexOf(name) > -1;
    },
    [location.pathname]
  );

  /* effects */

  useEffect(() => {
    console.log(location);
  }, [location.pathname]);

  /* renders */

  if (HIDE_ON_PATH.has(location.pathname)) {
    return null;
  }

  return (
    <div className="bottom-menu">
      <button
        className="bottom-menu__button"
        onClick={() => navigate('/contacts')}
      >
        <div>
          <ContactsIcon active={isCurrentMenu('contacts')} />
          <p
            className={`bottom-menu__button-text${
              isCurrentMenu('contacts') ? '-active' : ''
            }`}
          >
            Contacts
          </p>
        </div>
      </button>

      <button
        className="bottom-menu__button"
        onClick={() => navigate('/chats')}
      >
        <div>
          <ChatsIcon active={isCurrentMenu('chats')} />
          <p
            className={`bottom-menu__button-text${
              isCurrentMenu('chats') ? '-active' : ''
            }`}
          >
            Chats
          </p>
        </div>
      </button>

      <button
        className="bottom-menu__button"
        onClick={() => navigate('/profile')}
      >
        <div>
          <ProfileIcon active={isCurrentMenu('profile')} />
          <p
            className={`bottom-menu__button-text${
              isCurrentMenu('profile') ? '-active' : ''
            }`}
          >
            Profile
          </p>
        </div>
      </button>
    </div>
  );
};

export default BottomMenu;
