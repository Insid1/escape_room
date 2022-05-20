export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: [number, number ],
  duration: number
}
