import { useButtonGroupStore, useSelectedContactsStore } from '@/stores';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ChatsIcon from '../common/icons/ChatsIcon';
import CheckIcon from '../common/icons/CheckIcon';
import CloseIcon from '../common/icons/CloseIcon';
import ContactsIcon from '../common/icons/ContactsIcon';
import ProfileIcon from '../common/icons/ProfileIcon';
import useStoreState from '@/hooks/useStoreState';

type BottomMenuProps = {};

const HIDE_ON_PATH = new Set(['/login', '/sign-up', '/chat']);

const BottomMenu = (props: BottomMenuProps) => {
  const {} = props;

  /* stores */

  const location = useLocation();

  const navigate = useNavigate();

  const [buttonGroup, setButtonGroup] = useStoreState(useButtonGroupStore);

  const [selected, setSelected] = useStoreState(useSelectedContactsStore);

  /* functions */

  const isCurrentMenu = useCallback(
    (name: string) => {
      return location.pathname.indexOf(name) > -1;
    },
    [location.pathname]
  );

  const handleCreate = useCallback(() => {
    if (selected.size < 2) return;
    navigate('/chat');
    setSelected(new Set());
    setButtonGroup('general');
  }, [selected]);

  const handleCancel = useCallback(() => {
    setButtonGroup('general');
    setSelected(new Set());
  }, []);

  /* effects */

  useEffect(() => {
    const handler = (e: PopStateEvent) => {
      e.preventDefault();
      handleCancel();
      window.history.pushState(null, '', window.location.href);
    };

    const abort = () => {
      window.removeEventListener('popstate', handler);
    };

    if (buttonGroup !== 'create-group') return abort;

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handler);

    return abort;
  }, [buttonGroup]);

  /* renders */

  if (HIDE_ON_PATH.has(location.pathname)) {
    return null;
  }

  if (buttonGroup === 'create-group') {
    return (
      <div className="bottom-menu">
        <button
          className="bottom-menu__button bottom-menu__button__secondary"
          onClick={handleCreate}
        >
          <div>
            <CheckIcon />
            <p className="bottom-menu__button-text-bright">Create</p>
          </div>
        </button>

        <button className="bottom-menu__button" onClick={handleCancel}>
          <div>
            <CloseIcon />
            <p className="bottom-menu__button-text-active">Cancel</p>
          </div>
        </button>
      </div>
    );
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
