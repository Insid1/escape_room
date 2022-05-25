import { QuestComplexityType } from 'consts/enums';

type MapToComplexityNameScheme = Record<QuestComplexityType, string>;

const mapToComplexityName: MapToComplexityNameScheme = {
  [QuestComplexityType.Hard]: 'Сложный',
  [QuestComplexityType.Medium]: 'Средний',
  [QuestComplexityType.Easy]: 'Легкий',
};

export { mapToComplexityName };
