import { RootState } from 'store/store';

const selectQuests = (state: RootState) => state.QuestsData.quests;

const selectIsQuestsLoaded = (state: RootState) => state.QuestsData.isQuestsLoaded;

export { selectQuests, selectIsQuestsLoaded };
