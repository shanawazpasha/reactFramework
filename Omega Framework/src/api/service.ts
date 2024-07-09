import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getData: builder.query<any, string>({
      query: (endpoint) => endpoint,
    }),
    postData: builder.mutation<any, { endpoint: string; data: any }>({
      query: ({ endpoint, data }) => ({
        url: endpoint,
        method: 'POST',
        body: data,
      }),
    }),
    putData: builder.mutation<any, { endpoint: string; data: any }>({
      query: ({ endpoint, data }) => ({
        url: endpoint,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetDataQuery, usePostDataMutation, usePutDataMutation } = apiService;