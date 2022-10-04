import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../Rendering/renderWithRouter';
import App from '../../App';

console.log(App);
beforeAll(() => {
  window.getComputedStyle = () => {
  };
});
afterEach(() => jest.clearAllMocks());

describe('Test Login Page', () => {
  it('should have the correct inputs and buttons in the document', () => {
    const { history: { location: { pathname } } } = renderWithRouter(<App />);
    expect(screen.getByRole('textbox', 'mail')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(pathname).toBe('/');
  });

  // it('verify input email, password and button', () => {
  //   renderWithRouter(<App />, { route: '/' });

  //   expect(screen.getByRole('button', { name: /enter/i })).toBeDisabled();
  //   const button = screen.getByText(/Enter/i);
  //   const goodEmail = 'good@example.com';
  //   const goodPassword = '1234567';
  //   const badPassword = '123456';
  //   const badEmail = 'bad@examplecom';

  //   userEvent.type(screen.getByTestId('email-input'), badEmail);
  //   userEvent.type(screen.getByTestId('password-input'), badPassword);
  //   expect(button).toBeDisabled();

  //   userEvent.type(screen.getByTestId('email-input'), goodEmail);
  //   userEvent.type(screen.getByTestId('password-input'), goodPassword);
  //   expect(button).toBeEnabled();

  //   userEvent.click(button);
  //   // expect(window.location.href).toBe('http://localhost/foods');
  // });
});
