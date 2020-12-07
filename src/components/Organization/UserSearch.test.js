import React from 'react';
import UserSearch from './UserSearch';
import { render, screen, fireEvent } from '@testing-library/react';

describe('UserSearch tests', () => {
  beforeAll(() => {
    if (typeof window !== 'undefined') {
      const matchMediaPolyfill = function matchMediaPolyfill() {
        return { matches: false, addListener() {}, removeListener() {} };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
  });

  it('renders the user search on the screen', () => {
    // Render the component
    render(<UserSearch />);

    // Assert if the search bar appears on the screen
    expect(screen.getByTestId('user-search')).toBeInTheDocument();

    // check if there is an input with given placeholder
    expect(
      screen.getByPlaceholderText('type name to start search'),
    ).toBeInTheDocument();
  });

  it('renders the search result when someting is searched', () => {
    // Render the component
    const searchResultItems = [
      {
        value: '94a7335f-2181-4811-9a06-f53ae949a98a',
        label: 'Full Name, President, Department, Location',
      },
      {
        value: 'c2f54384-0fc3-44a4-a3ec-ca250b10dc39',
        label: 'Full Name 2, Vice-President, Department 2, Location 2',
      },
    ];

    render(<UserSearch result={searchResultItems} onSearch={() => {}} />);

    const searchInput = screen.getByTestId('user-search');
    // Act
    fireEvent.change(searchInput, { target: { value: 'president' } });

    // Assert if the search bar appears on the screen
    expect(screen.getByTestId('user-search')).toBeInTheDocument();

    // Expect to see the search result on the screen
    searchResultItems.forEach(result => {
      expect(screen.getByText(result.label)).toBeInTheDocument();
    });
  });
});
