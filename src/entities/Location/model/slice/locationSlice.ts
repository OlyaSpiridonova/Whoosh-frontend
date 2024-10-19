import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocationSchema } from '../types/LocationSchema';
import { fetchLocation } from '../services/fetchLocations/fetchLocations';
import type { Location } from '../types/location';

const initialState: LocationSchema = {
    isLoading: false,
    error: undefined,
    data: [],
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchLocation.fulfilled,
                (state, action: PayloadAction<Location[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchLocation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
// Action creators are generated for each case reducer function
export const { actions: locationActions } = locationSlice;
export const { reducer: locationReducer } = locationSlice;
