import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { Alert } from 'components/common/common';
import { ErrorMessage } from 'consts/enums';
import { useAppSelector } from 'store/hooks';
import { selectIsBookingSend, selectSendingErrorMessage } from 'store/interface/selectors';
import BookingModalForm from './booking-modal-form/booking-modal-form';
import * as S from './booking-modal.styled';

type BookingModalProps = {
  onModalClose: () => void
};

function BookingModal({ onModalClose }: BookingModalProps) {
  const isBookingSend = useAppSelector(selectIsBookingSend);
  const uploadingError = useAppSelector(selectSendingErrorMessage);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onModalClose()}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <BookingModalForm onModalClose={onModalClose} />
        {
        uploadingError
        && (
        <Alert isError>{uploadingError}</Alert>
        )
      }
        {
        isBookingSend
        && (<Alert>{ErrorMessage.UploadingSuccess}</Alert>
        )
      }
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
