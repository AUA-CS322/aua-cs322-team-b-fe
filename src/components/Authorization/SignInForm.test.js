import React from 'react';
import SignInForm from './SignInForm';
import { render, screen, fireEvent } from '@testing-library/react';

describe('SignInForm tests', () => {
  beforeAll(() => {
    if (typeof window !== 'undefined') {
      const matchMediaPolyfill = function matchMediaPolyfill() {
        return { matches: false, addListener() {}, removeListener() {} };
      };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
  });

  it('reders form with username, password and button', () => {
    // Arrange & Act
    render(<SignInForm />);

    // Assert
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('signin-button')).toBeInTheDocument();
  });

  it('button should be disabled initially', () => {
    // Arrange & Act
    render(<SignInForm />);

    // Assert
    expect(screen.getByTestId('signin-button')).toBeDisabled();
  });

  it('button should be disabled when password is missing', () => {
    // Arrange
    render(<SignInForm />);

    const passwordInput = screen.getByTestId('password');

    // Act
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // Assert
    expect(screen.getByTestId('signin-button')).toBeDisabled();
  });

  it('button should be disabled when username is missing', () => {
    // Arrange
    render(<SignInForm />);

    const usernameInput = screen
      .getByTestId('username')
      .querySelectorAll('input')[0];

    // Act
    fireEvent.change(usernameInput, { target: { value: 'john' } });

    // Assert
    expect(screen.getByTestId('signin-button')).toBeDisabled();
  });

  it('button should be enabled when username and password are available', () => {
    // Arrange
    render(<SignInForm />);

    const usernameInput = screen
      .getByTestId('username')
      .querySelectorAll('input')[0];
    const passwordInput = screen.getByTestId('password');

    // Act
    fireEvent.change(usernameInput, { target: { value: 'john' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // Assert
    expect(screen.getByTestId('signin-button')).toBeEnabled();
  });
});
