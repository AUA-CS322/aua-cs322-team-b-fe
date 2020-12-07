import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';

const UserSearch = ({ onSearch, onSelect, result, loading }) => {
  const [query, setQuery] = useState('');

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
      options={result}
      onSelect={handleSelect}
      onSearch={handleSearch}
      value={query}>
      <Input.Search
        data-testid="user-search"
        placeholder="type name to start search"
        allowClear
        loading={loading}
        enterButton
      />
    </AutoComplete>
  );
};

export default UserSearch;
