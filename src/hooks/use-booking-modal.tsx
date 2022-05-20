import { useState } from 'react';

const useBookingModal = ():[boolean, () => void, () => void] => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState<boolean>(false);

  const closeModal = (): void => {
    setIsBookingModalOpened(false);
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
