import { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { setIsBookingSend, setSendingErrorMessage } from 'store/interface/slice';

const useBookingModal = ():[boolean, () => void, () => void] => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModal = (): void => {
    setIsBookingModalOpened(false);
    dispatch(setIsBookingSend(false));
    dispatch(setSendingErrorMessage(null));
    document.removeEventListener('keydown', onEscDown);
  };

  const onEscDown = (evt: KeyboardEvent): void => {
    if (evt.key === 'escape' || evt.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = (): void => {
    setIsBookingModalOpened(true);
    document.addEventListener('keydown', onEscDown);
  };

  return [isBookingModalOpened, openModal, closeModal];
};

export default useBookingModal;
