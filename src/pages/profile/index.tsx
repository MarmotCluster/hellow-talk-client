import ProfileEditIcon from '@/components/common/icons/ProfileEditIcon';
import Logo from '@/components/common/Logo';

const Profile = () => {
  return (
    <main className="relative fullscreen display-flex fd-column">
      {/* <div className="searchbar-wrapper">
        <div className="searchbar">
          <div className="searchbar-icon">
            <Icon />
          </div>
          <input
            className="searchbar__input"
            type="text"
            placeholder="... Search"
          />
        </div>

        <div className="searchbar-groupchat flexy">
          <GroupChatIcon />
        </div>
      </div> */}

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
              <h3>24</h3>
              <p>Friends</p>
            </div>

            <div className="container-profile__statistics-block">
              <h3>8</h3>
              <p>Chats</p>
            </div>

            <div className="container-profile__statistics-block">
              <h3>3</h3>
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
                  Jane Doe
                </h3>
                <button className="container-profile__edit-item__button">
                  <ProfileEditIcon />
                  <p>edit</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="extramarginforinfinite" style={{ height: 80 }}></div>

        {/* <p className="container-subtext">24 Friends</p>

        <div className="contacts-container">
          {contactElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div> */}
      </div>
    </main>
  );
};

export default Profile;
