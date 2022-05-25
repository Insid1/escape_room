import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import BookingModal from './booking-modal';

it('error page should render correctly', () => {
  const onClose = jest.fn();

  render(
    <MockWrapperWithAllProviders>
      <BookingModal onModalClose={onClose} />
    </MockWrapperWithAllProviders>,

  );

  expect(screen.getByText(/Оставить заявку/))
    .toBeInTheDocument();
});
