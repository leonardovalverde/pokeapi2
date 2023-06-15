import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credentials, User } from "./types";

export const userQueries = createApi({
  reducerPath: "usersQueries",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_MOCKED_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<User, Credentials>({
      query: (credentials: Credentials) => ({
        url: "data",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = userQueries;
