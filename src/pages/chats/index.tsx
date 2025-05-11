import TopSearchBar from '@/components/features/TopSearchBar';
import useStoreState from '@/hooks/useStoreState';
import { useButtonGroupStore, usePrimarySearchStore } from '@/stores';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

const Chats = () => {
  /* stores */

  const navigate = useNavigate();

  const [buttonGroup, setButtonGroup] = useStoreState(useButtonGroupStore);

  const [search, setSearch] = useStoreState(usePrimarySearchStore);

  /* functions */

  const handleSearch = (e: React.ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
    setSearch(newValue);
  };

  const toggleButtonGroup = useCallback(() => {
    // setButtonGroup((v) => {
    //   if (isCreatingGroup) {
    //     setSelected(new Set());
    //     return 'general';
    //   }
    //   return 'create-group';
    // });
    setSearch('');
    setButtonGroup('create-group');
    navigate('/contacts');
  }, []);

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
      <TopSearchBar
        toggleButtonGroup={toggleButtonGroup}
        handleSearch={handleSearch}
      />

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
