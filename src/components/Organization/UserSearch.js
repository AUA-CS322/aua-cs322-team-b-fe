import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input, AutoComplete } from 'antd';
import {
  searchUserResult,
  searchUserLoading,
} from '../../selectors/user.selector';

const UserSearch = ({ onSearch, onSelect }) => {
  const [query, setQuery] = useState('');
  const searchResult = useSelector(searchUserResult);
  const loading = useSelector(searchUserLoading);

  const handleSelect = (value, options) => {
    onSelect(value);
    setQuery(options.label);
  };

  const handleSearch = value => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: '100%',
      }}
      options={searchResult}
      onSelect={handleSelect}
      onSearch={handleSearch}
      value={query}>
      <Input.Search
        placeholder="type name to start search"
        allowClear
        loading={loading}
        enterButton
      />
    </AutoComplete>
  );
};

export default UserSearch;
