import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';

const searchResult = query => {
  // simulate the search result
  return new Array(Math.floor(Math.random() * 6))
    .join('.')
    .split('.')
    .map((item, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: <div>Result of search "{query}"</div>,
      };
    });
};

const UserSearch = ({ onSearch }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = value => {
    onSearch(value);
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = value => {
    // TODO: implement on select functinality
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: '100%',
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}>
      <Input.Search placeholder="type name to start search" allowClear />
    </AutoComplete>
  );
};

export default UserSearch;
