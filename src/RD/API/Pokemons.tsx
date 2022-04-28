import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'PokeDex',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (pokemon) => `pokemon/${pokemon}`,
    // }),
    getPokemonList: builder.query<void, void>({
      query: () => ({
        url: '',
        method: 'GET',
      })

    })
  }),
})

export const { useGetPokemonListQuery } = pokemonApi