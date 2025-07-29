import {
  type Character,
  type CharacterDetailResponse,
  type CharacterListResponse,
  MarvelApiResponse,
  PaginatedResponse,
} from '@/types'

import baseApi from './base'

export interface CharacterQueryParams {
  name?: string // Return only characters matching the specified full character name (e.g. Spider-Man)
  nameStartsWith?: string // Return characters with names that begin with the specified string (e.g. Sp)
  modifiedSince?: string // Return only characters which have been modified since the specified date (ISO 8601 format)
  comics?: string // Return only characters which appear in the specified comics (comma-separated list of comic IDs)
  series?: string // Return only characters which appear the specified series (comma-separated list of series IDs)
  events?: string // Return only characters which appear in the specified events (comma-separated list of event IDs)
  stories?: string // Return only characters which appear the specified stories (comma-separated list of story IDs)
  orderBy?: 'name' | 'modified' | '-name' | '-modified' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
}

const charactersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], CharacterQueryParams | void>(
      {
        query: (params = {}) => ({
          url: '/characters',
          params: { limit: 20, ...params },
        }),
        transformResponse: (res: CharacterListResponse) => {
          if (!res?.data?.results) return []

          return res.data.results
        },
        providesTags: () => ['Characters'],
      },
    ),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `/characters/${id}`,
      transformResponse: (res: CharacterDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Character not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Characters', id }],
    }),
    getFeaturedCharacters: builder.query<Character[], void>({
      query: () => {
        const totalApprox = 1500
        const randomOffset = Math.floor(Math.random() * (totalApprox - 20))

        return {
          url: '/characters',
          params: {
            offset: randomOffset,
            limit: 20,
            orderBy: '-modified',
          },
        }
      },
      transformResponse: (res: CharacterListResponse) =>
        res?.data?.results || [],
      providesTags: () => ['FeaturedCharacters'],
    }),
    getCharactersList: builder.query<
      PaginatedResponse<Character>,
      CharacterQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/characters',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Character>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetCharactersListQuery,
  useLazyGetCharacterByIdQuery,
  useGetFeaturedCharactersQuery,
} = charactersApi
