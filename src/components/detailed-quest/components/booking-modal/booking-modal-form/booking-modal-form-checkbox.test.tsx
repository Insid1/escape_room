import { ThemeProvider } from 'styled-components';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_EMPTY_STORE } from 'test/mock-store.data';
import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import BokingModalFormCheckbox from './booking-modal-form-checkbox';

it('BookingModalFormInput component should render correctly and beeing able to switch from states', () => {
  const history = createMemoryHistory();
  const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BokingModalFormCheckbox register={fakeRegister} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByText(/Я согласен с/))
    .toBeInTheDocument();
  expect(screen.getByText(/правилами обработки персональных данных и пользовательским соглашением/))
    .toBeInTheDocument();
  expect(screen.getByRole('checkbox'))
    .toBeInTheDocument();
});
