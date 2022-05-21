import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestType } from 'consts/enums';
import { postBooking } from './thunks';

interface IInitialState {
  questTypeFilter: QuestType,
  isBookingSend: boolean,
  sendingErrorMessage: string | null,
}

const initialState: IInitialState = {
  questTypeFilter: QuestType.All,
  isBookingSend: false,
  sendingErrorMessage: null,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setQuestTypeFilter(state, action: PayloadAction<QuestType>) {
      state.questTypeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBooking.fulfilled, (state) => {
        state.isBookingSend = true;
      })
      .addCase(postBooking.pending, (state) => {
        state.isBookingSend = false;
        state.sendingErrorMessage = null;
      })
      .addCase(postBooking.rejected, (state) => {
        state.sendingErrorMessage = 'some error occurred!';
      });
  },
});

export const { setQuestTypeFilter } = interfaceSlice.actions;
export default interfaceSlice;
