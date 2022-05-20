import { RootState } from 'store/store';

const selectQuest = (state: RootState) => state.QuestData.quest;

const selectIsQuestLoaded = (state: RootState) => state.QuestData.isQuestLoaded;

export { selectQuest, selectIsQuestLoaded };
