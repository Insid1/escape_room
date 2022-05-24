import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
import { ErrorMessage } from 'consts/enums';
import { ApiRoutes } from 'consts/routes';
import type { IQuest } from 'types/quest-type';

const fetchQuest = createAsyncThunk<
IQuest,
string,
{ rejectValue: string }
>(
  'quest/fetchQuest',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${ApiRoutes.Quests}${id}`);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(ErrorMessage.LoadingFailed);
    }
  },
);

export { fetchQuest };
