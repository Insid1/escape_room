import { createSlice } from '@reduxjs/toolkit';
import { IQuest } from 'types/quest-type';

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
});

// Добавить экспорты экшенов
export default questSlice;
