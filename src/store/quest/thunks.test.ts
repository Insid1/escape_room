import store from 'store/store';
import {
  fakeNetWorkResponse, fakeNetWorkResponseError, FAKE_NOT_FOUND_MSG, FAKE_QUEST, FAKE_QUESTS,
} from 'test/mock-data';
import { fetchQuest } from './thunks';

describe('Async Thunk fetchQuest works correctly with positive cases', () => {
  beforeAll(() => {
    fakeNetWorkResponse();
  });

  it('If fetchQuest fulfilled it takes given data from body and replaces quest field in InitialState with its data.', async () => {
    const id = 1;

    const result = await store.dispatch(fetchQuest(`${id}`));

    const quest = result.payload;

    expect(result.type).toBe('quest/fetchQuest/fulfilled');
    expect(quest).toEqual(FAKE_QUEST);

    const state = store.getState().QuestData;

    expect(state.quest).toEqual(FAKE_QUEST);
  });
  it('If fetchQuest fulfilled it takes given data from body and replaces quest field in modified state with its data.', async () => {
    await store.dispatch(fetchQuest('1'));

    const id = 2;

    const result = await store.dispatch(fetchQuest(`${id}`));

    const quest = result.payload;

    expect(result.type).toBe('quest/fetchQuest/fulfilled');
    expect(quest).toEqual(FAKE_QUESTS[1]);

    const state = store.getState().QuestData;

    expect(state.quest).toEqual(FAKE_QUESTS[1]);
  });
});

describe('Async Thunk fetchQuest works correctly with negative cases', () => {
  beforeAll(() => {
    fakeNetWorkResponseError();
  });
  it(`If fetchQuest rejected it provides data from asyncThunk
    and modifies field Error message with its message from response`, async () => {
    const id = 500;

    const result = await store.dispatch(fetchQuest(`${id}`));

    const errorMsg = result.payload;

    expect(result.type).toBe('quest/fetchQuest/rejected');
    expect(errorMsg).toEqual(FAKE_NOT_FOUND_MSG);

    const state = store.getState().QuestData;

    expect(state.errorMessage).toEqual(FAKE_NOT_FOUND_MSG);
  });
});
