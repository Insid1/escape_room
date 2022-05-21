import { QuestComplexityType, QuestType } from './enums';

type MapToComplexityNameScheme = Record<QuestComplexityType, string>;

type MapToTypeNameScheme = Record<QuestType, string>;

const mapToComplexityName: MapToComplexityNameScheme = {
  [QuestComplexityType.Hard]: 'Сложный',
  [QuestComplexityType.Medium]: 'Средний',
  [QuestComplexityType.Easy]: 'Легкий',
};

const mapToTypeName: MapToTypeNameScheme = {
  [QuestType.All]: 'Смешанный',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Detective]: 'Детектив',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.SciFi]: 'Sci-Fi',
};

export { mapToComplexityName, mapToTypeName };
