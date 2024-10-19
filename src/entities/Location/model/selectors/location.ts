import { StateSchema } from '@/app/providers/StoreProvider';

export const getLocationData = (state: StateSchema) => state.locations?.data;
export const getLocationIsLoading = (state: StateSchema) =>
    state.locations?.isLoading || false;
export const getLocationError = (state: StateSchema) => state.locations?.error;
