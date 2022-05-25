import { BookingInputName } from 'consts/enums';
import type { IBookingInput } from 'types/booking-type';

type MapToBookingInputNameScheme = Record<BookingInputName, IBookingInput>;

const mapToBookingInputName: MapToBookingInputNameScheme = {
  [BookingInputName.Name]: {
    label: 'Ваше Имя',
    placeHolder: 'Имя',
    inputType: 'text',
  },
  [BookingInputName.Phone]: {
    label: 'Контактный телефон',
    placeHolder: 'Телефон',
    inputType: 'tel',
    rules: {
      minLength: 10,
      maxLength: 10,
    },
  },
  [BookingInputName.PeopleCount]: {
    label: 'Количество участников',
    placeHolder: 'Количество участников',
    inputType: 'number',
  },
};

export { mapToBookingInputName };
