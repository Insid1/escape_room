import { IQuest } from 'types/quest-type';
import useBookingModal from 'hooks/use-booking-modal';
import { useAppSelector } from 'store/hooks';
import { selectQuest } from 'store/quest/selectors';
import DetailedQuestInfo from './detailed-quest-info';

function DetailedQuestContainer() {
  const [isBookingModalOpened, openModal, closeModal] = useBookingModal();
  const quest = useAppSelector(selectQuest) as IQuest;

  const handleBookingBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    openModal();
  };
  const handleModalCloseBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    closeModal();
  };
  return (
    <DetailedQuestInfo
      {...quest}
      onBookingBtnClick={handleBookingBtnClick}
      onModalCloseBtnClick={handleModalCloseBtnClick}
      isBookingModalOpened={isBookingModalOpened}
    />
  );
}

export default DetailedQuestContainer;
