import {
  FAKE_BAD_REQUEST_MSG,
  FAKE_NOT_FOUND_MSG,
  FAKE_QUEST, FAKE_QUESTS,
} from './mock-data';

const FAKE_EMPTY_STORE = {
  QuestsData: {
    quests: [],
    isQuestsLoaded: false,
    errorMessage: null,
  },
  QuestData: {
    quest: null,
    isQuestLoaded: false,
    errorMessage: null,
  },
  Interface: {
    questTypeFilter: 'all',
    isBookingSend: false,
    sendingErrorMessage: null,
  },

};
const FAKE_STORE_WITH_ERRORS = {
  QuestsData: {
    quests: [],
    isQuestsLoaded: false,
    errorMessage: FAKE_BAD_REQUEST_MSG,
  },
  QuestData: {
    quest: null,
    isQuestLoaded: false,
    errorMessage: FAKE_NOT_FOUND_MSG,
  },
  Interface: {
    questTypeFilter: 'all',
    isBookingSend: false,
    sendingErrorMessage: FAKE_BAD_REQUEST_MSG,
  },
};
const FAKE_STORE_WITH_DATA = {
  QuestsData: {
    quests: FAKE_QUESTS,
    isQuestsLoaded: true,
    errorMessage: null,
  },
  QuestData: {
    quest: FAKE_QUEST,
    isQuestLoaded: true,
    errorMessage: null,
  },
  Interface: {
    questTypeFilter: 'all',
    isBookingSend: true,
    sendingErrorMessage: null,
  },
};

export { FAKE_EMPTY_STORE, FAKE_STORE_WITH_ERRORS, FAKE_STORE_WITH_DATA };
