import { IBookingInput } from 'types/booking-type';
import { BookingInputName, QuestComplexityType, QuestType } from './enums';

type MapToComplexityNameScheme = Record<QuestComplexityType, string>;

const mapToComplexityName: MapToComplexityNameScheme = {
  [QuestComplexityType.Hard]: 'Сложный',
  [QuestComplexityType.Medium]: 'Средний',
  [QuestComplexityType.Easy]: 'Легкий',
};

type MapToTypeNameScheme = Record<QuestType, string>;

const mapToTypeName: MapToTypeNameScheme = {
  [QuestType.All]: 'Смешанный',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Detective]: 'Детектив',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.SciFi]: 'Sci-Fi',
};

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

export { mapToComplexityName, mapToTypeName, mapToBookingInputName };
