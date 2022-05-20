import { RootState } from 'store/store';

const selectQuestTypeFilter = (state: RootState) => state.Interface.questTypeFilter;

export { selectQuestTypeFilter };
