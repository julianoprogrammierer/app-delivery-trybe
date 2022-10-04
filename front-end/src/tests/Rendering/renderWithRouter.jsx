import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { UseAppContextProvider } from '../../Context/APIProvider';

const renderWithRouter = (component, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }) } = {}) => ({

  ...render(
    <UseAppContextProvider>

      <Router history={ history }>
        { component }
      </Router>

    </UseAppContextProvider>,
  ),
});

export default renderWithRouter;
