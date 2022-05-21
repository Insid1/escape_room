import { QuestComplexityType, QuestType } from 'consts/enums';

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: QuestType,
  level: QuestComplexityType,
  peopleCount: [number, number ],
  duration: number
}
