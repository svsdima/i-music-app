import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', 'a79379fa59mshed94ff3469b0f62p106361jsn59ffb8629d5f');

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => '/charts/world' }),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
