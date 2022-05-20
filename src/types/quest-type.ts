import { QuestComplexity } from 'enums/enums';

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: keyof typeof QuestComplexity,
  peopleCount: [number, number ],
  duration: number
}
