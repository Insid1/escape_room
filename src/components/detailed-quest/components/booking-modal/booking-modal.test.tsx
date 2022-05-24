import { ThemeProvider } from 'styled-components';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_EMPTY_STORE } from 'test/mock-store.data';
import BookingModal from './booking-modal';

it('error page should render correctly', () => {
  const history = createMemoryHistory();
  const onClose = jest.fn();

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BookingModal onModalClose={onClose} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByText(/Оставить заявку/))
    .toBeInTheDocument();
});
