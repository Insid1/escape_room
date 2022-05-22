import { IBookingInput } from 'types/booking-type';
import { BookingInputName, QuestComplexityType, QuestType } from './enums';
import { AppRoutes } from './routes';

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

type MapToNavigationLinksNameScheme = {
  [key in keyof typeof AppRoutes]?: {
    to: AppRoutes,
    title: string,
  }
};

const mapToNavigationLinksName: MapToNavigationLinksNameScheme = {
  Main: {
    to: AppRoutes.Main,
    title: 'Квесты',
  },
  Newbie: {
    to: AppRoutes.Newbie,
    title: 'Новичкам',
  },
  Reviews: {
    to: AppRoutes.Reviews,
    title: 'Отзывы',
  },
  Promo: {
    to: AppRoutes.Promo,
    title: 'Акции',
  },
  Contacts: {
    to: AppRoutes.Contacts,
    title: 'Контакты',
  },
};

export {
  mapToComplexityName, mapToTypeName,
  mapToBookingInputName, mapToNavigationLinksName,
};
