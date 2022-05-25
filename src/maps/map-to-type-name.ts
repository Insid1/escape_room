import { QuestType } from 'consts/enums';

type MapToTypeNameScheme = Record<QuestType, string>;

const mapToTypeName: MapToTypeNameScheme = {
  [QuestType.All]: 'Смешанный',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Detective]: 'Детектив',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.SciFi]: 'Sci-Fi',
};

export { mapToTypeName };
