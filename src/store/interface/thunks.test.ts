import store from 'store/store';
import {
  fakeNetWorkResponse, fakeNetWorkResponseError,
  FAKE_BAD_REQUEST_MSG,
  FAKE_BOOKING,
} from 'test-utils/mock-data';
import { postBooking } from './thunks';

describe('Async Thunk postBooking works correctly with positive cases', () => {
  beforeAll(() => {
    fakeNetWorkResponse();
  });

  it('If postBooking fulfilled it takes given data from body and replaces isBookingSend field in InitialState with its data.', async () => {
    const result = await store.dispatch(postBooking(FAKE_BOOKING));

    const status = result.payload;

    expect(result.type).toBe('interface/postBooking/fulfilled');
    expect(status).toEqual(true);

    const state = store.getState().Interface;

    expect(state.isBookingSend).toEqual(true);
  });
});

describe('Async Thunk postBooking works correctly with negative cases', () => {
  beforeAll(() => {
    fakeNetWorkResponseError();
  });
  it(`If fetchQuest rejected it provides data from asyncThunk
    and modifies field Error message with its message from response`, async () => {
    const result = await store.dispatch(postBooking(FAKE_BOOKING));

    const errorMsg = result.payload;

    expect(result.type).toBe('interface/postBooking/rejected');
    expect(errorMsg).toEqual(FAKE_BAD_REQUEST_MSG);

    const state = store.getState().Interface;

    expect(state.sendingErrorMessage).toEqual(FAKE_BAD_REQUEST_MSG);
  });
});
