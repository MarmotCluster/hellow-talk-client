import React from 'react';
import Icon from '../common/Icon';
import GroupChatIcon from '../common/icons/GroupChatIcon';

type TopSearchBarProps = {
  handleSearch: (e: React.ChangeEvent) => void;
  toggleButtonGroup: () => void;
};

const TopSearchBar = (props: TopSearchBarProps) => {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar">
        <div className="searchbar-icon">
          <Icon />
        </div>
        <input
          className="searchbar__input"
          type="text"
          placeholder="... Search"
          onChange={props.handleSearch}
        />
      </div>

      <button
        className="searchbar-groupchat flexy blank-button active-button"
        onClick={props.toggleButtonGroup}
      >
        <GroupChatIcon />
      </button>
    </div>
  );
};

export default TopSearchBar;
