import type {
  Creator,
  CreatorDetailResponse,
  CreatorListResponse,
  MarvelApiResponse,
  PaginatedResponse,
} from '@/types'

import baseApi from './base'

export interface CreatorQueryParams {
  firstName?: string // Return only creators matching the specified first name
  middleName?: string // Return only creators matching the specified middle name
  lastName?: string // Return only creators matching the specified last name
  suffix?: string // Return only creators matching the specified suffix (e.g. Jr., Sr.)
  nameStartsWith?: string // Return creators with names that begin with the specified string (searches fullName)
  firstNameStartsWith?: string // Return creators with first names that begin with the specified string
  middleNameStartsWith?: string // Return creators with middle names that begin with the specified string
  lastNameStartsWith?: string // Return creators with last names that begin with the specified string
  suffixStartsWith?: string // Return creators with suffixes that begin with the specified string
  modifiedSince?: string // Return only creators which have been modified since the specified date (ISO 8601 format)
  comics?: string // Return only creators who worked on the specified comics (comma-separated list of comic IDs)
  series?: string // Return only creators who worked on the specified series (comma-separated list of series IDs)
  events?: string // Return only creators who worked on comics that took place in the specified events (comma-separated list of event IDs)
  stories?: string // Return only creators who worked on the specified stories (comma-separated list of story IDs)
  orderBy?:
    | 'suffix'
    | 'firstName'
    | 'lastName'
    | 'middleName'
    | 'modified'
    | '-suffix'
    | '-firstName'
    | '-lastName'
    | '-middleName'
    | '-modified' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
}

const creatorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCreators: builder.query<Creator[], CreatorQueryParams | void>({
      query: (params = {}) => ({
        url: '/creators',
        params: { limit: 20, ...params },
      }),
      transformResponse: (res: CreatorListResponse) => {
        if (!res?.data?.results) return []

        return res.data.results
      },
      providesTags: () => ['Creators'],
    }),
    getCreatorById: builder.query<Creator, string>({
      query: (id) => `/creators/${id}`,
      transformResponse: (res: CreatorDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Creator not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Creators', id }],
    }),
    getCreatorsList: builder.query<
      PaginatedResponse<Creator>,
      CreatorQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/creators',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Creator>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetCreatorsQuery,
  useGetCreatorByIdQuery,
  useGetCreatorsListQuery,
  useLazyGetCreatorByIdQuery,
} = creatorsApi
