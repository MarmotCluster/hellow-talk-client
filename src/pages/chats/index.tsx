import Icon from '@/components/common/Icon';
import GroupChatIcon from '@/components/common/icons/GroupChatIcon';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

const Chats = () => {
  /* stores */

  const navigate = useNavigate();

  /* renders */

  const renderChats = useCallback(() => {
    return (
      <div className="contact-item" onClick={() => navigate('/chat')}>
        <div className="contact-item__profile">
          <div className="contact-item__status" />
        </div>

        <div className="contact-item-texts">
          <p className="contact-item__name">Betris Pagaduan</p>
          <p className="contact-item__recentchat">where u at?</p>
        </div>

        <div className="contact-item-datetime">
          <p>08:33</p>
        </div>
      </div>
    );
  }, []);

  const chatElements = useMemo(() => {
    return Array(30)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>{renderChats()}</React.Fragment>
      ));
  }, []);

  return (
    <div className="relative fullscreen display-flex fd-column">
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
        <p className="container-subtext">4 Chats</p>

        <div className="contacts-container">
          {chatElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
