import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { ApiRoutes } from 'consts/routes';
import { IBookingData } from 'types/booking-type';

const postBooking = createAsyncThunk(
  'interface/postBooking',
  async (data: IBookingData) => {
    const response = await api.post(ApiRoutes.Orders, data);
  },
);

export { postBooking };
