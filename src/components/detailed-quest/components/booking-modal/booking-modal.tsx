import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useAppSelector } from 'store/hooks';
import { selectSendingErrorMessage } from 'store/interface/selectors';
import BookingModalForm from './booking-modal-form/booking-modal-form';
import * as S from './booking-modal.styled';

type BookingModalProps = {
  onModalCloseBtnClick: React.MouseEventHandler<HTMLButtonElement>
};

function BookingModal({ onModalCloseBtnClick }: BookingModalProps) {
  const uploadingError = useAppSelector(selectSendingErrorMessage);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onModalCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <BookingModalForm />
        {
        uploadingError !== null
          ? <div>{uploadingError}</div>
          : ''
      }
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
