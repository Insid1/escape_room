import { createSlice } from '@reduxjs/toolkit';
import { QuestType } from 'enums/enums';

interface IInitialState {
  questTypeFilter: QuestType
}

const initialState: IInitialState = {
  questTypeFilter: QuestType.All,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {},
});

// Добавить экспорты экшенов
export default interfaceSlice;
