import store from 'store/store';
import {
  fakeNetWorkResponse, fakeNetWorkResponseError,
  FAKE_BAD_REQUEST_MSG,
  FAKE_QUESTS,
} from 'test/test.data';
import { fetchQuests } from './thunks';

describe('Async Thunk fetchQuest works correctly with positive cases', () => {
  beforeAll(() => {
    fakeNetWorkResponse();
  });

  it('If fetchQuest fulfilled it takes given data from body and replaces quests field in InitialState with its data.', async () => {
    const result = await store.dispatch(fetchQuests());

    const quests = result.payload;

    expect(result.type).toBe('quests/fetchQuests/fulfilled');
    expect(quests).toEqual(FAKE_QUESTS);

    const state = store.getState().QuestsData;

    expect(state.quests).toEqual(FAKE_QUESTS);
  });
});

describe('Async Thunk fetchQuest works correctly with negative cases', () => {
  beforeAll(() => {
    fakeNetWorkResponseError();
  });

  it('If fetchQuest rejected it takes given error data from and replaces errorMessage field in InitialState with its data.', async () => {
    const result = await store.dispatch(fetchQuests());

    const message = result.payload;

    expect(result.type).toBe('quests/fetchQuests/rejected');
    expect(message).toEqual(FAKE_BAD_REQUEST_MSG);

    const state = store.getState().QuestsData;

    expect(state.errorMessage).toEqual(FAKE_BAD_REQUEST_MSG);
  });
});
