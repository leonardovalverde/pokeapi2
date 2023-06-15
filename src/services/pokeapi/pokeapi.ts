import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GameParams,
  GameResponse,
  PaginationParams,
  PokeApiGenericResponse,
} from "./types";

export const pokeapiQueries = createApi({
  reducerPath: "pokeapiQueries",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokeApiGenericResponse, PaginationParams>({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getGameList: builder.query<GameResponse, GameParams>({
      query: ({ id }) => `version/${id}`,
    }),
    getAllGames: builder.query<PokeApiGenericResponse, void>({
      query: () => `version?limit=100`,
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetGameListQuery,
  useGetAllGamesQuery,
} = pokeapiQueries;
