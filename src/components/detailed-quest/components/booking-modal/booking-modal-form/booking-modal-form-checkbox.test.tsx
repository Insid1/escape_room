import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { FAKE_EMPTY_STORE } from 'test-utils/mock-store.data';
import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import BookingModalFormCheckBox from './booking-modal-form-checkbox';

const fakeRegister = jest.fn() as UseFormRegister<IBookingData>;
it('BookingModalFormInput component should render correctly and beeing able to switch from states', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <BookingModalFormCheckBox register={fakeRegister} />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Я согласен с/))
    .toBeInTheDocument();
  expect(screen.getByText(/правилами обработки персональных данных и пользовательским соглашением/))
    .toBeInTheDocument();
  expect(screen.getByRole('checkbox'))
    .toBeInTheDocument();
});
