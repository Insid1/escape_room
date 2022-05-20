import { createSlice } from '@reduxjs/toolkit';
import { IQuest } from 'types/quest-type';
import { fetchQuests } from './thunks';

interface IInitialState {
  quests: Array<IQuest>,
  isQuestsLoaded: boolean,
}

const initialState: IInitialState = {
  quests: [],
  isQuestsLoaded: false,
};

const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.isQuestsLoaded = true;
        state.quests = action.payload;
      })
      .addCase(fetchQuests.pending, (state) => {
        state.isQuestsLoaded = false;
      })
      .addCase(fetchQuests.rejected, (state, action) => {
        state.isQuestsLoaded = true;
        state.quests = [];
      });
  },
});

// Добавить экспорты экшенов
export default questsSlice;
