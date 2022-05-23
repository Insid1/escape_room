import { QuestType } from 'consts/enums';
import interfaceSlice, {
  setQuestTypeFilter, setIsBookingSend,
  setSendingErrorMessage,
} from './slice';
import { postBooking } from './thunks';

const { reducer } = interfaceSlice;

describe('Interface reducer works correctly with initial actions', () => {
  it('Reducer with given undefined state and unknown action returns initial state', () => {
    expect(reducer(undefined, {
      type: undefined,
    })).toEqual({
      questTypeFilter: QuestType.All,
      isBookingSend: false,
      sendingErrorMessage: null,
    });
  });
  it('Reducer with given undefined state and setQuestTypeFilter returns expected result', () => {
    expect(reducer(undefined, setQuestTypeFilter(QuestType.Adventures))).toEqual({
      questTypeFilter: QuestType.Adventures,
      isBookingSend: false,
      sendingErrorMessage: null,
    });
  });
  it('Reducer with given undefined state and setIsBookingSend returns expected result', () => {
    expect(reducer(undefined, setIsBookingSend(true))).toEqual({
      questTypeFilter: QuestType.All,
      isBookingSend: true,
      sendingErrorMessage: null,
    });
  });
  it('Reducer with given undefined state and setSendingErrorMessage returns expected result', () => {
    expect(reducer(undefined, setSendingErrorMessage('some error msg'))).toEqual({
      questTypeFilter: QuestType.All,
      isBookingSend: false,
      sendingErrorMessage: 'some error msg',
    });
  });
});

describe('Interface reducer works correctly with given extra actions from extraReducers', () => {
  it('Reducer with provided postBooking.pending.type sets isBookingSend to false & sendingErrorMessage to null', () => {
    const action = { type: postBooking.pending.type };
    const initialState = {
      questTypeFilter: QuestType.Adventures,
      isBookingSend: true,
      sendingErrorMessage: 'some msg',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      questTypeFilter: QuestType.Adventures,
      isBookingSend: false,
      sendingErrorMessage: null,
    });
  });
  it('Reducer with provided postBooking.fulfilled.type sets isBookingSend to given payload(true)', () => {
    const action = { type: postBooking.fulfilled.type, payload: true };
    const initialState = {
      questTypeFilter: QuestType.Detective,
      isBookingSend: false,
      sendingErrorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      questTypeFilter: QuestType.Detective,
      isBookingSend: true,
      sendingErrorMessage: null,
    });
  });
  it('Reducer with provided postBooking.rejected.type sets isBookingSend to given payload(error msg)', () => {
    const action = { type: postBooking.rejected.type, payload: 'some error from request' };
    const initialState = {
      questTypeFilter: QuestType.Detective,
      isBookingSend: false,
      sendingErrorMessage: null,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      questTypeFilter: QuestType.Detective,
      isBookingSend: false,
      sendingErrorMessage: 'some error from request',
    });
  });
});
