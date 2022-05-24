import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
import { ErrorMessage } from 'consts/enums';
import { ApiRoutes } from 'consts/routes';
import type { IQuest } from 'types/quest-type';

const fetchQuests = createAsyncThunk<
IQuest[],
undefined,
{ rejectValue: string }
>(
  'quests/fetchQuests',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(ApiRoutes.Quests);
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(ErrorMessage.LoadingFailed);
    }
  },
);

export { fetchQuests };
