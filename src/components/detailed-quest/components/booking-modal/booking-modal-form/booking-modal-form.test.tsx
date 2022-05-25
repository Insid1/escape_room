import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import BookingModalForm from './booking-modal-form';

it('BookingModalFormInput component should render correctly with given title name', () => {
  const fakeOnClose = jest.fn();

  render(
    <MockWrapperWithAllProviders>
      <BookingModalForm onModalClose={fakeOnClose} />
    </MockWrapperWithAllProviders>,
  );
  const submitBtn = screen.getByRole('button');
  expect(submitBtn)
    .toBeInTheDocument();
});
