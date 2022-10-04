import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';
import renderWithRouter from '../Rendering/renderWithRouter';

const DATA_TEST_ID_EMAIL = 'common_login__input-email';
const DATA_TEST_ID_BUTTON = 'common_login__button-login';
const DATA_TEST_ID_PASS = 'common_login__input-password';

beforeAll(() => {
  window.getComputedStyle = () => {
  };
});

afterEach(() => jest.clearAllMocks());

describe('Test Login Page', () => {
  it('should have the correct inputs and buttons in the document', () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId(DATA_TEST_ID_BUTTON)).toBeInTheDocument();
    expect(screen.getByTestId(DATA_TEST_ID_EMAIL)).toBeInTheDocument();

    // expect(pathname).toBe('/login');
  });

  it('verify input email, password and button', () => {
    const { route } = renderWithRouter(<App />, '/login');

    expect(screen.getByTestId(DATA_TEST_ID_BUTTON)).toBeDisabled();
    const button = screen.getByTestId(DATA_TEST_ID_BUTTON);
    const inputEmail = screen.getByTestId(DATA_TEST_ID_EMAIL);
    const inputPass = screen.getByTestId(DATA_TEST_ID_PASS);

    const goodEmail = 'zebirita@email.com';
    const goodPassword = '$#zebirita#$';
    const badEmail = 'bad@examplecom';
    const badPassword = '123';

    fireEvent.change(inputEmail, { target: { value: badEmail } });
    fireEvent.change(inputPass, { target: { value: badPassword } });
    // expect(button).toBeDisabled();
    fireEvent.change(inputEmail, { target: { value: goodEmail } });
    fireEvent.change(inputPass, { target: { value: goodPassword } });

    expect(button).toBeEnabled();
    fireEvent.keyPress(button);

    console.log(route);
  });
});
