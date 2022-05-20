import { QuestType } from 'consts/enums';
import { IQuest } from 'types/quest-type';

const filterByType = (quests: IQuest[], filterType: QuestType): IQuest[] => {
  if (filterType === QuestType.All) {
    return quests;
  }
  return quests.filter((quest) => quest.type === filterType);
};
export { filterByType };
