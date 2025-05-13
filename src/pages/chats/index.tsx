import TopSearchBar from '@/components/features/TopSearchBar';
import useStoreState from '@/hooks/useStoreState';
import {
  useButtonGroupStore,
  useChatsStore,
  usePrimarySearchStore,
} from '@/stores';
import type { ChatItem } from '@/stores/chats';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

const Chats = () => {
  /* stores */

  const navigate = useNavigate();

  //@ts-ignore
  const [buttonGroup, setButtonGroup] = useStoreState(useButtonGroupStore);

  const [search, setSearch] = useStoreState(usePrimarySearchStore);

  //@ts-ignore
  const [chats, setChats] = useStoreState(useChatsStore);

  /* memos */

  const filtered = useMemo(() => {
    if (!search.length) return chats;

    return chats.filter((item) =>
      [item.message, item.name].some(
        (t) => t.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      )
    );
  }, [search]);

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

  const renderChats = useCallback((data: ChatItem) => {
    return (
      <div className="contact-item" onClick={() => navigate('/chat')}>
        <div className="contact-item__profile">
          <div className="contact-item__status" />
        </div>

        <div className="contact-item-texts">
          <p className="contact-item__name">{data.name}</p>
          <p className="contact-item__recentchat">{data.message}</p>
        </div>

        <div className="contact-item-datetime">
          <p>{data.latestUpdatedAt}</p>
        </div>
      </div>
    );
  }, []);

  const chatElements = useMemo(() => {
    return filtered.map((item) => (
      <React.Fragment key={item.id}>{renderChats(item)}</React.Fragment>
    ));
  }, [filtered]);

  return (
    <main className="relative fullscreen display-flex fd-column bg-primary">
      <TopSearchBar
        toggleButtonGroup={toggleButtonGroup}
        handleSearch={handleSearch}
      />

      <div className="container">
        <p className="container-subtext">{filtered.length} Chats</p>

        <div className="contacts-container">
          {chatElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div>
      </div>
    </main>
  );
};

export default Chats;
