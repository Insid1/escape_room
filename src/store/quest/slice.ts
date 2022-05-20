import { createSlice } from '@reduxjs/toolkit';
import { IQuest } from 'types/quest-type';
import { fetchQuest } from './thunks';

interface IInitialState {
  quest: IQuest | null,
  isQuestLoaded: boolean,
}

const initialState: IInitialState = {
  quest: null,
  isQuestLoaded: false,
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
      .addCase(fetchQuest.pending, (state, action) => {
        state.isQuestLoaded = false;
        state.quest = null;
      })
      .addCase(fetchQuest.rejected, (state, action) => {
        state.isQuestLoaded = true;
        state.quest = null;
      });
  },
});

// Добавить экспорты экшенов
export default questSlice;
