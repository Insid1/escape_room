import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { FAKE_EMPTY_STORE } from 'test-utils/mock-store.data';
import { BookingInputName } from 'consts/enums';
import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import userEvent from '@testing-library/user-event';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import BookingModalFormInput from './booking-modal-form-input';

const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;
it('BookingModalFormInput component should render correctly with given title name', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <BookingModalFormInput register={fakeRegister} title={'name' as BookingInputName} />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByLabelText(/Ваше Имя/i))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Имя/i))
    .toBeInTheDocument();

  userEvent.type(screen.getByPlaceholderText(/Имя/i), 'oleg');
  expect(screen.getByDisplayValue(/oleg/i)).toBeInTheDocument();
});
it('BookingModalFormInput component should render correctly with given title phone', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <BookingModalFormInput register={fakeRegister} title={'phone' as BookingInputName} />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByLabelText(/Контактный телефон/))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Телефон/))
    .toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText(/Телефон/i), '1111111111');
  expect(screen.getByDisplayValue(/1111111111/i)).toBeInTheDocument();
});
it('BookingModalFormInput component should render correctly with given title peopeCount', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <BookingModalFormInput register={fakeRegister} title={'peopleCount' as BookingInputName} />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByLabelText(/Количество участников/))
    .toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Количество участников/))
    .toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText(/Количество участников/i), '2');
  expect(screen.getByDisplayValue(2)).toBeInTheDocument();
});
