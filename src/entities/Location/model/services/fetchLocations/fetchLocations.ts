import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from '@/app/providers/StoreProvider';
import type { Location } from '../../types/location';
import { AxiosInstance } from 'axios';

export const fetchLocation = createAsyncThunk<
    Location[],
    void,
    ThunkConfig<string>
>('locations/fetchLocation', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Location[]>(`/locations`);

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
