import { FAKE_QUESTS } from 'test-utils/mock-data';
import questSlice from './slice';
import { fetchQuest } from './thunks';

const { reducer } = questSlice;

describe('Quest reducer works correctly with initial actions', () => {
  it('Reducer with given undefined state and unknown action returns initial state', () => {
    expect(reducer(undefined, {
      type: undefined,
    })).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with given modified state and unknown action returns unchanged state state', () => {
    const initialState = {
      quest: FAKE_QUESTS[1],
      isQuestLoaded: true,
      errorMessage: null,
    };
    expect(reducer(initialState, {
      type: undefined,
    })).toEqual(initialState);
  });
});

describe('Quest reducer works correctly with given extra actions from extraReducers', () => {
  it('Reducer with provided fetchQuest.pending.type sets isQuestLoaded to false & errorMessage to null', () => {
    const action = { type: fetchQuest.pending.type };
    const initialState = {
      quest: FAKE_QUESTS[0],
      isQuestLoaded: true,
      errorMessage: 'some error',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuest.fulfilled.type sets isQuestLoaded to true & quest to mockData', () => {
    const action = { type: fetchQuest.fulfilled.type, payload: FAKE_QUESTS[0] };
    const initialState = {
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: FAKE_QUESTS[0],
      isQuestLoaded: true,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuest.rejected.type sets  errorMessage to some given message from payload', () => {
    const action = { type: fetchQuest.rejected.type, payload: 'some error' };
    const initialState = {
      quest: null,
      isQuestLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quest: null,
      isQuestLoaded: false,
      errorMessage: 'some error',
    });
  });
});
