import { renderHook } from '@testing-library/react';
import React from 'react';
import { MockWrapperWithStore } from 'test-utils/wrappers';
import useBookingModal from './use-booking-modal';

describe('Hook useBookingModal works correctly', () => {
  describe('Hook useBooking modal returns correct dataType and correct amount of elements amount', () => {
    const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
      <MockWrapperWithStore>{children}</MockWrapperWithStore>
    );
    const { result } = renderHook(() => useBookingModal(), { wrapper });
    it('123', () => {
      expect(result.current).toHaveLength(3);
    });
  });
});
