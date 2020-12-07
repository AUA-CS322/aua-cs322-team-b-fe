import React from 'react';
import UserDetails from './UserDetails';
import { render, screen } from '@testing-library/react';

const detailList = [
  'Name',
  'Position',
  'Department',
  'Manager',
  'Location',
  'Email',
  'Phone',
];

describe('UserDetails tests', () => {
  beforeAll(() => {
    if (typeof window !== 'undefined') {
      const matchMediaPolyfill = function matchMediaPolyfill() {
        return { matches: false, addListener() {}, removeListener() {} };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
  });

  it('reders the user details on the screen', () => {
    // Render the component
    const currentTime = Date.now();
    const items = {
      name: `Test Full Name ${currentTime}`,
      position: `Test Position ${currentTime}`,
      department: `Test Department ${currentTime}`,
      manager: `Test Manager ${currentTime}`,
      location: `Test Location ${currentTime}`,
      email: `Test Email ${currentTime}`,
      phone: `Test Phone ${currentTime}`,
    };

    render(<UserDetails {...items} />);

    // Assert if all the details appear on the screen
    expect(screen.getByTestId('avatar')).toBeInTheDocument();

    detailList.forEach(detailName => {
      // Check the label
      expect(screen.getByText(`${detailName}:`)).toBeInTheDocument();
      // Check the value
      expect(
        screen.getByText(items[detailName.toLowerCase()]),
      ).toBeInTheDocument();
    });
  });
});
