// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const useAPI = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `user/login`,
        // When performing a mutation, you typically use a method of
        // PATCH/PUT/POST/DELETE for REST endpoints
        method: 'POST',
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(patch)`
        body: { email, password },
      }),
    }),
    getProfile: builder.mutation({
      query: () => ({
        url: `user/profile`,
        method: 'POST',
      }),
    }),
    setProfile: builder.mutation({
      query: ({ firstName, lastName }) => ({
        url: `user/profile`,
        method: 'PUT',
        body: { firstName, lastName },
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
  useGetProfileMutation,
  useSetProfileMutation,
} = useAPI
