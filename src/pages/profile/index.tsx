import ProfileEditIcon from '@/components/common/icons/ProfileEditIcon';
import Logo from '@/components/common/Logo';
import useAuth from '@/hooks/useAuth';
import useStoreValue from '@/hooks/useStoreValue';
import { useMyProfileStore } from '@/stores';
import { behave } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
  /* stores */

  const profile = useStoreValue(useMyProfileStore);

  const { statistics } = profile;

  /* refs */

  const usernameRef = useRef<HTMLInputElement>(null);

  /* states */

  const [toggle, setToggle] = useState(false);

  const [username, setUsername] = useState(profile.name);

  /* hooks */

  const navigate = useNavigate();

  const { logout } = useAuth();

  /* functions */

  const handleToggle = () => {
    setToggle((v) => !v);
  };

  const handleUsernameChange = (e: React.ChangeEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  const handleSignOut = () => {
    const toLogin = () => navigate('/login', { replace: true });

    behave(() => logout(), toLogin, toLogin);
  };

  /* effects */

  useEffect(() => {
    if (!toggle) return;

    if (!usernameRef.current) return;

    usernameRef.current.focus();
  }, [toggle]);

  /* renders */

  return (
    <main className="relative fullscreen display-flex fd-column bg-primary">
      <div className="topbar flexy">
        <Logo />
      </div>

      <div className="container" style={{ overflow: 'scroll' }}>
        <div
          className="container-profile__image"
          style={{ backgroundImage: `url('images/profile.png')` }}
        ></div>

        <div className="container-profile__statistics">
          <p>Statistics</p>
          <div className="container-profile__statistics__blocks">
            <div className="container-profile__statistics-block">
              <h3>{statistics.friends}</h3>
              <p>Friends</p>
            </div>

            <div className="container-profile__statistics-block">
              <h3>{statistics.chats}</h3>
              <p>Chats</p>
            </div>

            <div className="container-profile__statistics-block">
              <h3>{statistics.groups}</h3>
              <p>Groups</p>
            </div>
          </div>
        </div>

        <div className="container-profile__edit">
          <div className="container-profile__edit-item">
            <div className="first">
              <p className="container-profile__edit-item__title">Username</p>
              <div>
                <h3 className="container-profile__edit-item__value">
                  {toggle ? (
                    <input
                      ref={usernameRef}
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  ) : (
                    profile.name
                  )}
                </h3>

                <button
                  className="container-profile__edit-item__button"
                  onClick={handleToggle}
                >
                  <ProfileEditIcon />
                  <p>edit</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-signout display-flex justify-center">
          <button className="container-signout__button" onClick={handleSignOut}>
            sign out
          </button>
        </div>

        <div id="extramarginforinfinite" style={{ height: 80 }}></div>
      </div>
    </main>
  );
};

export default Profile;
