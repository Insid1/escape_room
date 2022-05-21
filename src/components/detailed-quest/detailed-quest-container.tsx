import { IQuest } from 'types/quest-type';
import useBookingModal from 'hooks/use-booking-modal';
import { useAppSelector } from 'store/hooks';
import { selectQuest } from 'store/quest/selectors';
import { PUBLIC_FOLDER } from 'consts/consts';
import DetailedQuestContent from './detailed-quest-content';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

function DetailedQuestContainer() {
  const [isBookingModalOpened, openModal, closeModal] = useBookingModal();
  const quest = useAppSelector(selectQuest) as IQuest;
  const { coverImg, title } = quest;

  const handleBookingBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    openModal();
  };
  return (
    <S.Main>
      <S.PageImage
        src={`${PUBLIC_FOLDER}/${coverImg}`}
        alt={`Квест${title}`}
        width="1366"
        height="768"
      />
      <DetailedQuestContent
        {...quest}
        onBookingBtnClick={handleBookingBtnClick}
      />
      {isBookingModalOpened
        && (
        <BookingModal
          onModalClose={closeModal}
        />
        )}
    </S.Main>

  );
}

export default DetailedQuestContainer;
