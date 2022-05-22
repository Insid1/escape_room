import { createSlice } from '@reduxjs/toolkit';
import { fetchQuests } from 'store/quests/thunks';
import { IQuest } from 'types/quest-type';
import { fetchQuest } from './thunks';

interface IInitialState {
  quest: IQuest | null,
  isQuestLoaded: boolean,
  errorMessage: string | null;
}

const initialState: IInitialState = {
  quest: null,
  isQuestLoaded: false,
  errorMessage: null,
};

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.isQuestLoaded = true;
        state.quest = action.payload;
      })
      .addCase(fetchQuest.pending, (state) => {
        state.isQuestLoaded = false;
      })
      .addCase(fetchQuest.rejected, (state, action) => {
        state.quest = null;
        state.errorMessage = action.payload as string;
      })
      .addCase(fetchQuests.fulfilled, (state) => {
        state.quest = null;
        state.isQuestLoaded = false;
      });
  },
});

export default questSlice;
