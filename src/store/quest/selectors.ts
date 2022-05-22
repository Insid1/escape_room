import { RootState } from 'store/store';

const selectQuest = (state: RootState) => state.QuestData.quest;

const selectIsQuestLoaded = (state: RootState) => state.QuestData.isQuestLoaded;

const selectQuestErrorMessage = (state: RootState) => state.QuestData.errorMessage;

export { selectQuest, selectIsQuestLoaded, selectQuestErrorMessage };
