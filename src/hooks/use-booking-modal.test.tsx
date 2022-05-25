import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MockWrapperWithStore } from 'test-utils/wrappers';
import useBookingModal from './use-booking-modal';

describe('Hook useBookingModal works correctly', () => {
  const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
    <MockWrapperWithStore>{children}</MockWrapperWithStore>
  );

  it('Hook useBooking modal returns correct dataType and correct amount of elements amount', () => {
    const { result } = renderHook(() => useBookingModal(), { wrapper });
    const { current } = result;
    const [isBookingModalOpened, openModal, closeModal] = current;

    expect(current).toHaveLength(3);
    expect(current).toBeInstanceOf(Array);

    expect(isBookingModalOpened).toBe(false);
    expect(openModal).toBeInstanceOf(Function);
    expect(closeModal).toBeInstanceOf(Function);
  });
  it('Hook useBooking modal should change states correctly', () => {
    const { result, rerender } = renderHook(() => useBookingModal(), { wrapper });
    const { current } = result;
    const [, openModal, closeModal] = current;

    act(() => openModal());
    rerender();

    expect(result.current[0]).toBe(true);

    act(() => closeModal());
    rerender();

    expect(result.current[0]).toBe(false);
  });
  it('Hook useBooking modal should change states when push enter', () => {
    const { result, rerender } = renderHook(() => useBookingModal(), { wrapper });
    const { current } = result;
    const [, openModal] = current;

    act(() => openModal());
    rerender();

    expect(result.current[0]).toBe(true);

    userEvent.keyboard('{esc}');

    expect(result.current[0]).toBe(false);
  });
});
