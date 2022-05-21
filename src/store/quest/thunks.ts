import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
import { ApiRoutes } from 'consts/routes';
import type { IQuest } from 'types/quest-type';

const fetchQuest = createAsyncThunk<
IQuest,
string,
{ rejectValue: string }
>(
  'quest/fetchQuests',
  async (id) => {
    try {
      const response = await api.get(`${ApiRoutes.Quests}${id}`);
      return response.data;
    } catch (err) {
      // В дальнейшем в slice можно обработать сообщения об ошибке
      if (axios.isAxiosError(err)) {
        return err.message;
      }
      return 'unexpected error occurred!';
    }
  },
);

export { fetchQuest };