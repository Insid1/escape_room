import { QuestComplexityType } from 'consts/enums';

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: QuestComplexityType,
  peopleCount: [number, number ],
  duration: number
}
