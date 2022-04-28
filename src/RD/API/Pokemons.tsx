import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'PokeDex',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })
