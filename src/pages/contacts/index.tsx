import Icon from '@/components/common/Icon';
import GroupChatIcon from '@/components/common/icons/GroupChatIcon';
import React, { useCallback, useMemo } from 'react';

const Contacts = () => {
  /* renders */

  const renderContacts = useCallback(() => {
    return (
      <div className="contact-item">
        <div className="contact-item__profile">
          <div className="contact-item__status" />
        </div>

        <div className="contact-item-texts">
          <p className="contact-item__name">Jane Doe</p>
        </div>
      </div>
    );
  }, []);

  const contactElements = useMemo(() => {
    return Array(30)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>{renderContacts()}</React.Fragment>
      ));
  }, []);

  return (
    <main className="relative fullscreen display-flex fd-column">
      <div className="searchbar-wrapper">
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
      </div>

      <div className="container">
        <p className="container-subtext">24 Friends</p>

        <div className="contacts-container">
          {contactElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
