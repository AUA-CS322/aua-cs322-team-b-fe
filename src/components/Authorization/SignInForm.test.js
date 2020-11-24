import React from 'react';
import SignInForm from './SignInForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe('SignInForm redner', () => {
  if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill() {
      return { matches: false, addListener() {}, removeListener() {} };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
  it('renders without errors', () => {
    render(<SignInForm />);
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('username')).toBeInTheDocument();
  });
});
