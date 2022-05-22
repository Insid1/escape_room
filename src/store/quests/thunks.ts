import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
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
      return response.data;
    } catch (err) {
      // В дальнейшем в slice можно обработать сообщения об ошибке
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Unexpected error occurred!');
    }
  },
);

export { fetchQuests };
