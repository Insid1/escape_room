import { BookingInputName } from 'consts/enums';
import { mapToBookingInputName } from 'maps/map-to-booking-input-name';
import { UseFormRegister } from 'react-hook-form';
import { IBookingData } from 'types/booking-type';
import * as S from '../booking-modal.styled';

type BookingModalFormInputProps = {
  title: BookingInputName;
  register: UseFormRegister<IBookingData>;
};

function BookingModalFormInput({ register, title }: BookingModalFormInputProps) {
  const { inputType, rules } = mapToBookingInputName[title];
  return (
    <S.BookingField>
      <S.BookingLabel htmlFor={`booking-${title}`}>{mapToBookingInputName[title].label}</S.BookingLabel>
      <S.BookingInput
        {...register(title, {
          valueAsNumber: inputType === 'number',
        })}
        {...rules}
        type={inputType}
        id={`booking-${title}`}
        placeholder={mapToBookingInputName[title].placeHolder}
        required
      />
    </S.BookingField>

  );
}

export default BookingModalFormInput;
