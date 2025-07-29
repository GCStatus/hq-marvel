import type {
  MarvelApiResponse,
  PaginatedResponse,
  Series,
  SeriesDetailResponse,
  SeriesListResponse,
} from '@/types'

import baseApi from './base'

export interface SeriesQueryParams {
  title?: string // Return only series matching the specified title
  titleStartsWith?: string // Return series with titles that begin with the specified string (e.g. X)
  startYear?: number // Return only series matching the specified start year
  comics?: string // Return only series which contain the specified comics (comma-separated list of comic IDs)
  stories?: string // Return only series which contain the specified stories (comma-separated list of story IDs)
  events?: string // Return only series which contain comics that take place during the specified events (comma-separated list of event IDs)
  creators?: string // Return only series which feature work by the specified creators (comma-separated list of creator IDs)
  characters?: string // Return only series which feature the specified characters (comma-separated list of character IDs)
  seriesType?: 'collection' | 'one shot' | 'limited' | 'ongoing' // Filter the series by publication frequency type
  contains?: string // Return only series containing one or more comics with the specified format (comma-separated: comic, magazine, trade paperback, hardcover, digest, graphic novel, digital comic, infinite comic)
  orderBy?:
    | 'title'
    | 'modified'
    | 'startYear'
    | '-title'
    | '-modified'
    | '-startYear' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
  modifiedSince?: string // Return only series which have been modified since the specified date (ISO 8601 format)
}

const seriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeries: builder.query<Series[], SeriesQueryParams | void>({
      query: (params = {}) => ({
        url: '/series',
        params: { limit: 20, ...params },
      }),
      transformResponse: (res: SeriesListResponse) => {
        if (!res?.data?.results) return []

        return res.data.results
      },
      providesTags: () => ['Series'],
    }),
    getSeriesById: builder.query<Series, string>({
      query: (id) => `/series/${id}`,
      transformResponse: (res: SeriesDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Series not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Series', id }],
    }),
    getSeriesList: builder.query<
      PaginatedResponse<Series>,
      SeriesQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/series',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Series>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetSeriesQuery,
  useGetSeriesByIdQuery,
  useGetSeriesListQuery,
  useLazyGetSeriesByIdQuery,
} = seriesApi
