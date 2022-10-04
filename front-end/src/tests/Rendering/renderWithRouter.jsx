import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UseAppContextProvider } from '../../Context/APIProvider';

const renderWithRouter = (component, route = '/') => ({
  route,
  ...render(
    <UseAppContextProvider>
      <MemoryRouter initialEntries={ [route] }>
        {component}
      </MemoryRouter>
    </UseAppContextProvider>,
  ),
});

export default renderWithRouter;
