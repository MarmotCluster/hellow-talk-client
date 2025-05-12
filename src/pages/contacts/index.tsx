import RadioButton from '@/components/common/icons/RadioButton';
import RadioButtonChecked from '@/components/common/icons/RadioButtonChecked';
import TopSearchBar from '@/components/features/TopSearchBar';
import useStoreState from '@/hooks/useStoreState';
import useStoreValue from '@/hooks/useStoreValue';
import {
  useButtonGroupStore,
  useContactsStore,
  useMyProfileStore,
  usePrimarySearchStore,
  useSelectedContactsStore,
} from '@/stores';
import type { ContactItem } from '@/stores/contacts';
import React, { useCallback, useMemo } from 'react';

const Contacts = () => {
  /* stores */

  const [buttonGroup, setButtonGroup] = useStoreState(useButtonGroupStore);

  const [search, setSearch] = useStoreState(usePrimarySearchStore);

  const [contacts, setContacts] = useStoreState(useContactsStore);

  const [selected, setSelected] = useStoreState(useSelectedContactsStore);

  const profile = useStoreValue(useMyProfileStore);

  /* states */

  /* memos */

  const isCreatingGroup = useMemo(
    () => buttonGroup === 'create-group',
    [buttonGroup]
  );

  const filtered = useMemo(() => {
    if (!search.length) {
      return contacts;
    }

    return contacts.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    );
  }, [search]);

  /* functions */

  const handleSearch = (e: React.ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
    setSearch(newValue);
  };

  const toggleButtonGroup = useCallback(() => {
    setButtonGroup(() => {
      if (isCreatingGroup) {
        setSelected(new Set());
        return 'general';
      }
      return 'create-group';
    });
  }, [isCreatingGroup]);

  const handleProfileClick = useCallback(
    (id: string) => {
      if (!isCreatingGroup) return;

      setSelected((v) => {
        if (v.has(id)) {
          v.delete(id);
        } else {
          v.add(id);
        }
        return new Set(v);
      });
    },
    [buttonGroup]
  );

  /* renders */

  const renderContacts = (data: ContactItem) => {
    const radioButton = (function () {
      if (isCreatingGroup && data.id !== profile.id) {
        return (
          <div className="contact-item-radio">
            {selected.has(data.id) ? <RadioButtonChecked /> : <RadioButton />}
          </div>
        );
      }
      return null;
    })();

    return (
      <div className="contact-item" onClick={() => handleProfileClick(data.id)}>
        <div className="contact-item__profile">
          {data.status === 'online' && <div className="contact-item__status" />}
        </div>

        <div className="contact-item-texts">
          <p className="contact-item__name">{data.name}</p>
        </div>

        {radioButton}
      </div>
    );
  };

  const contactElements = useMemo(() => {
    const { id, name, status } = profile;

    const myProfile = renderContacts({
      id,
      name,
      status,
    });

    const divider = <div className="contact-divider" />;

    const items = filtered.map((item) => (
      <React.Fragment key={item.id}>{renderContacts(item)}</React.Fragment>
    ));

    return (
      <React.Fragment>
        {!search.length && (
          <React.Fragment>
            {myProfile}
            {divider}
          </React.Fragment>
        )}

        {items}
      </React.Fragment>
    );
  }, [search, filtered, buttonGroup, selected]);

  return (
    <main className="relative fullscreen display-flex fd-column">
      <TopSearchBar
        toggleButtonGroup={toggleButtonGroup}
        handleSearch={handleSearch}
      />

      <div className="container">
        <p className="container-subtext">{filtered.length} Friends</p>

        <div className="contacts-container">
          {contactElements}
          <div id="extramarginforinfinite" style={{ height: 80 }}></div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
