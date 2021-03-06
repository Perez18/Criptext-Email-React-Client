import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import ProfileShortCut from './../containers/ProfileShortCut';
import './headermain.scss';

const HeaderMain = props => (
  <div className="header-main">
    <SearchBox
      allLabels={props.allLabels}
      isHiddenMenuSearchHints={props.isHiddenMenuSearchHints}
      isHiddenMenuSearchOptions={props.isHiddenMenuSearchOptions}
      isLoadingSearch={props.isLoadingSearch}
      getSearchParams={props.getSearchParams}
      onClearSearchInput={props.onClearSearchInput}
      onClickSearch={props.onClickSearch}
      onSearchSelectThread={props.onSearchSelectThread}
      onToggleMenuSearchHints={props.onToggleMenuSearchHints}
      onToggleMenuSearchOptions={props.onToggleMenuSearchOptions}
      onTriggerSearch={props.onTriggerSearch}
      searchParams={props.searchParams}
      threads={props.threads}
      hints={props.hints}
    />
    <ProfileShortCut
      avatarTimestamp={props.avatarTimestamp}
      openSettings={props.openSettings}
      openLogin={props.openLogin}
      onUpdateApp={props.onUpdateApp}
    />
  </div>
);

HeaderMain.propTypes = {
  allLabels: PropTypes.array,
  avatarTimestamp: PropTypes.number,
  getSearchParams: PropTypes.func,
  hints: PropTypes.object,
  isHiddenMenuSearchHints: PropTypes.bool,
  isHiddenMenuSearchOptions: PropTypes.bool,
  isLoadingSearch: PropTypes.bool,
  onClearSearchInput: PropTypes.func,
  onClickSearch: PropTypes.func,
  onSearchSelectThread: PropTypes.func,
  openLogin: PropTypes.func,
  openSettings: PropTypes.func,
  onToggleMenuSearchHints: PropTypes.func,
  onToggleMenuSearchOptions: PropTypes.func,
  onTriggerSearch: PropTypes.func,
  onUpdateApp: PropTypes.func,
  searchParams: PropTypes.object,
  threads: PropTypes.object
};

export default HeaderMain;
