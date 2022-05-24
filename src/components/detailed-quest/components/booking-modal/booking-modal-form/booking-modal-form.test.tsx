import { ThemeProvider } from 'styled-components';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_EMPTY_STORE } from 'test/mock-store.data';
import BookingModalForm from './booking-modal-form';

it('BookingModalFormInput component should render correctly with given title name', () => {
  const history = createMemoryHistory();
  const fakeOnClose = jest.fn();

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BookingModalForm onModalClose={fakeOnClose} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByRole('button'))
    .toBeInTheDocument();
});