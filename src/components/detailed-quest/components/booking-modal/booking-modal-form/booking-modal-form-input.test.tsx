import { ThemeProvider } from 'styled-components';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_EMPTY_STORE } from 'test/mock-store.data';
import { BookingInputName } from 'consts/enums';
import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import userEvent from '@testing-library/user-event';
import BookingModalFormInput from './booking-modal-form-input';

it('BookingModalFormInput component should render correctly with given title name', () => {
  const history = createMemoryHistory();
  const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BookingModalFormInput register={fakeRegister} title={'name' as BookingInputName} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByLabelText(/Ваше Имя/i))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Имя/i))
    .toBeInTheDocument();

  userEvent.type(screen.getByPlaceholderText(/Имя/i), 'oleg');
  expect(screen.getByDisplayValue(/oleg/i)).toBeInTheDocument();
});
it('BookingModalFormInput component should render correctly with given title phone', () => {
  const history = createMemoryHistory();
  const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BookingModalFormInput register={fakeRegister} title={'phone' as BookingInputName} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByLabelText(/Контактный телефон/))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Телефон/))
    .toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText(/Телефон/i), '1111111111');
  expect(screen.getByDisplayValue(/1111111111/i)).toBeInTheDocument();
});
it('BookingModalFormInput component should render correctly with given title peopeCount', () => {
  const history = createMemoryHistory();
  const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;

  const mockStore = configureMockStore();
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <BookingModalFormInput register={fakeRegister} title={'peopleCount' as BookingInputName} />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByLabelText(/Количество участников/))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Количество участников/))
    .toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText(/Количество участников/i), '2');
  expect(screen.getByDisplayValue(2)).toBeInTheDocument();
});
