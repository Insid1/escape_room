import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import * as S from '../booking-modal.styled';

type BookingModalFormInputProps = {
  register: UseFormRegister<IBookingData>;
};

function BookingModalFormCheckBox({ register }: BookingModalFormInputProps) {
  return (

    <S.BookingCheckboxWrapper>
      <S.BookingCheckboxInput
        {...register('isLegal')}
        type="checkbox"
        id="booking-legal"
        name="isLegal"
        required
      />
      <S.BookingCheckboxLabel
        className="checkbox-label"
        htmlFor="booking-legal"
      >
        <S.BookingCheckboxText>
          Я согласен с
          {' '}
          <S.BookingLegalLink href="#">
            правилами обработки персональных данных и пользовательским
            соглашением
          </S.BookingLegalLink>
        </S.BookingCheckboxText>
      </S.BookingCheckboxLabel>
    </S.BookingCheckboxWrapper>

  );
}

export default BookingModalFormCheckBox;
