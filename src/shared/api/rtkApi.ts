import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
