import { createSlice } from '@reduxjs/toolkit';
import { IQuest } from 'types/quest-type';

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
});

// Добавить экспорты экшенов
export default questsSlice;
