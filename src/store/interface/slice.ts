import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestType } from 'consts/enums';

interface IInitialState {
  questTypeFilter: QuestType
}

const initialState: IInitialState = {
  questTypeFilter: QuestType.All,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setQuestTypeFilter(state, action: PayloadAction<QuestType>) {
      state.questTypeFilter = action.payload;
    },
  },
});

export const { setQuestTypeFilter } = interfaceSlice.actions;
export default interfaceSlice;
