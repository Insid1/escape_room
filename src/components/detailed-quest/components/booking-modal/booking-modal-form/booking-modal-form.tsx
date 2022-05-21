import { BookingInputName } from 'consts/enums';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postBooking } from 'store/interface/thunks';
import { IBookingData } from 'types/booking-type';
import * as S from '../booking-modal.styled';
import BookingModalFormCheckBox from './booking-modal-form-checkbox';
import BookingModalFormInput from './booking-modal-form-input';

function BookingModalForm() {
  const {
    handleSubmit, register,
  } = useForm<IBookingData>({ shouldUseNativeValidation: true });
  const dispatch = useAppDispatch();

  const onSubmit:SubmitHandler<IBookingData> = (data) => {
    dispatch(postBooking(data));
  };

  return (
    <S.BookingForm
      id="booking-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {Object.values(BookingInputName).map((inputName) => (
        <BookingModalFormInput
          key={inputName}
          register={register}
          title={inputName}
        />
      ))}
      <S.BookingSubmit
        type="submit"
      >
        Отправить заявку
      </S.BookingSubmit>
      <BookingModalFormCheckBox
        register={register}
      />
    </S.BookingForm>
  );
}

export default BookingModalForm;
