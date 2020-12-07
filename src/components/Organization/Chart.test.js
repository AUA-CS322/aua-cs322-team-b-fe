import React from 'react';
import Chart from './Chart';
import { render, screen } from '@testing-library/react';

describe('Chart tests', () => {
  beforeAll(() => {
    if (typeof window !== 'undefined') {
      const matchMediaPolyfill = function matchMediaPolyfill() {
        return { matches: false, addListener() {}, removeListener() {} };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
  });

  it('renders the user org chart on the screen with correct node information', () => {
    const chartData = [
      {
        nodeId: 1,
        parentNodeId: null,
        fullName: 'FName LName',
        position: 'President',
      },
      {
        nodeId: 2,
        parentNodeId: 1,
        fullName: 'FName1 LName1',
        position: 'Vice President',
      },
      {
        nodeId: 3,
        parentNodeId: 1,
        fullName: 'FName2 LName2',
        position: 'Vice President 2',
      },
    ];
    // Render the component
    render(<Chart data={chartData} />);

    // Assert if all the user chart appears on the screen
    expect(screen.getByTestId('user-chart')).toBeInTheDocument();

    // Check each node information to be present on the screen
    chartData.forEach(user => {
      // Check the full name of each node
      expect(screen.getByText(user.fullName)).toBeInTheDocument();
      // Check the Position of each node
      expect(screen.getByText(user.position)).toBeInTheDocument();
    });
  });
});
