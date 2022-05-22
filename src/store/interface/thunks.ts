import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
import { ErrorMessage } from 'consts/enums';
import { ApiRoutes } from 'consts/routes';
import { IBookingData } from 'types/booking-type';

const postBooking = createAsyncThunk<
boolean,
IBookingData,
{ rejectValue: string }
>(
  'interface/postBooking',
  async (data, { rejectWithValue }) => {
    try {
      await api.post(ApiRoutes.Orders, data);
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(ErrorMessage.LoadingFailed);
    }
  },
);

export { postBooking };
