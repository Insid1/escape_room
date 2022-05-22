import { selectQuestTypeFilter } from 'store/interface/selectors';
import { RootState } from 'store/store';
import { filterByType } from 'utils/quest';
import createCachedSelector from 're-reselect';

const selectQuests = (state: RootState) => state.QuestsData.quests;

const selectIsQuestsLoaded = (state: RootState) => state.QuestsData.isQuestsLoaded;

const selectErrorMessage = (state: RootState) => state.QuestsData.errorMessage;

const selectFilteredQuests = createCachedSelector(
  [selectQuests, selectQuestTypeFilter],
  (quests, questFilterType) => filterByType(quests, questFilterType),
)(
  (state) => state.Interface.questTypeFilter,
);

export {
  selectQuests, selectIsQuestsLoaded,
  selectErrorMessage, selectFilteredQuests,
};
