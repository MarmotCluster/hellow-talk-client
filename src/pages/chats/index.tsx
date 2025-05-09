import Icon from '@/components/common/Icon';
import React, { useCallback, useMemo } from 'react';

const Chats = () => {
  /* renders */

  const renderChats = useCallback(() => {
    return (
      <div className="contact-item">
        <div className="contact-item__profile">
          <div className="contact-item__status" />
        </div>

        <p className="contact-item__name">Jane Doe</p>
      </div>
    );
  }, []);

  const contactElements = useMemo(() => {
    return Array(30)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>{renderChats()}</React.Fragment>
      ));
  }, []);

  return (
    <div className="relative fullscreen display-flex fd-column">
      <div className="parent-w p-1p5rem">
        <div
          className="parent-w display-flex align-center roundy"
          style={{ backgroundColor: 'white', paddingLeft: 6 }}
        >
          <Icon />
          <input
            type="text"
            placeholder="... Search"
            style={{ outline: 'none', border: 'none', fontSize: 12 }}
          />
        </div>
      </div>

      <div className="container">
        <p className="container-subtext">24 Friends</p>

        <div className="contacts-container">
          {contactElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
