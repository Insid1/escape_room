import { RootState } from 'store/store';

const selectQuestTypeFilter = (state: RootState) => state.Interface.questTypeFilter;

const selectIsBookingSend = (state: RootState) => state.Interface.isBookingSend;

const selectSendingErrorMessage = (state: RootState) => state.Interface.sendingErrorMessage;

export { selectQuestTypeFilter, selectIsBookingSend, selectSendingErrorMessage };
