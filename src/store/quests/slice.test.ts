import { FAKE_QUESTS } from 'test/mock-data';
import questsSlice from './slice';
import { fetchQuests } from './thunks';

const { reducer } = questsSlice;

describe('Quests reducer works correctly with initial actions', () => {
  it('Reducer with given undefined state and unknown action returns initial state', () => {
    expect(reducer(undefined, {
      type: undefined,
    })).toEqual({
      quests: [],
      isQuestsLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with given modified state and unknown action returns unchanged state state', () => {
    const initialState = {
      quests: FAKE_QUESTS,
      isQuestsLoaded: true,
      errorMessage: null,
    };
    expect(reducer(initialState, {
      type: undefined,
    })).toEqual(initialState);
  });
});

describe('Quests reducer works correctly with given extra actions from extraReducers', () => {
  it('Reducer with provided fetchQuests.pending.type sets isQuestsLoaded to false & errorMessage to null and quests to empty array', () => {
    const action = { type: fetchQuests.pending.type };
    const initialState = {
      quests: FAKE_QUESTS,
      isQuestsLoaded: true,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quests: [],
      isQuestsLoaded: false,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuests.fulfilled.type sets isQuestsLoaded to true & quests to mockData', () => {
    const action = { type: fetchQuests.fulfilled.type, payload: FAKE_QUESTS };
    const initialState = {
      quests: [],
      isQuestsLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quests: FAKE_QUESTS,
      isQuestsLoaded: true,
      errorMessage: null,
    });
  });
  it('Reducer with provided fetchQuests.rejected.type sets & errorMessage to some given message from payload', () => {
    const action = { type: fetchQuests.rejected.type, payload: 'some error' };
    const initialState = {
      quests: [],
      isQuestsLoaded: false,
      errorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      quests: [],
      isQuestsLoaded: false,
      errorMessage: 'some error',
    });
  });
});
