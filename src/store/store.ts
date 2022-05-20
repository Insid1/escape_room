import { configureStore } from '@reduxjs/toolkit';
import questsSlice from './quests/slice';
import questSlice from './quest/slice';
import interfaceSlice from './interface/slice';

enum ReducerName {
  QuestsData = 'QuestsData',
  QuestData = 'QuestData',
  Interface = 'Interface',
}

const store = configureStore({
  reducer: {
    [ReducerName.QuestsData]: questsSlice.reducer,
    [ReducerName.QuestData]: questSlice.reducer,
    [ReducerName.Interface]: interfaceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
