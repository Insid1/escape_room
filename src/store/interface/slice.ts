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
    setIsBookingSend(state, action: PayloadAction<boolean>) {
      state.isBookingSend = action.payload;
    },
    setSendingErrorMessage(state, action: PayloadAction<string | null>) {
      state.sendingErrorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBooking.fulfilled, (state, action) => {
        state.isBookingSend = action.payload;
      })
      .addCase(postBooking.pending, (state) => {
        state.isBookingSend = false;
        state.sendingErrorMessage = null;
      })
      .addCase(postBooking.rejected, (state, action) => {
        state.sendingErrorMessage = action.payload as string;
      });
  },
});

export const {
  setQuestTypeFilter,
  setIsBookingSend,
  setSendingErrorMessage,
} = interfaceSlice.actions;
export default interfaceSlice;
