import type {
  Comic,
  ComicDetailResponse,
  ComicListResponse,
  MarvelApiResponse,
  PaginatedResponse,
} from '@/types'

import baseApi from './base'

export interface ComicQueryParams {
  format?: string // Filter by the issue format (e.g. comic, magazine, trade paperback, hardcover, digest, graphic novel, digital comic, infinite comic)
  formatType?: string // Filter by the issue format type (comic or collection)
  noVariants?: boolean // Exclude variant comics from the result set
  dateDescriptor?: 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth' // Return comics within a predefined date range
  dateRange?: string // Return only comics on sale between the specified dates (format: YYYY-MM-DD,YYYY-MM-DD)
  title?: string // Return only comics matching the specified title
  titleStartsWith?: string // Return comics with titles that begin with the specified string (e.g. Sp)
  startYear?: number // Return only comics with the specified starting year
  issueNumber?: number // Return only the issue with the specified issue number
  diamondCode?: string // Filter by diamond code
  digitalId?: number // Filter by digital comic id
  upc?: string // Filter by UPC
  isbn?: string // Filter by ISBN
  ean?: string // Filter by EAN
  issn?: string // Filter by ISSN
  hasDigitalIssue?: boolean // Include only results which are available digitally
  modifiedSince?: string // Return only comics which have been modified since the specified date (ISO 8601 format)
  creators?: string // Return only comics which feature work by the specified creators (comma-separated list of creator IDs)
  characters?: string // Return only comics which feature the specified characters (comma-separated list of character IDs)
  series?: string // Return only comics which are part of the specified series (comma-separated list of series IDs)
  events?: string // Return only comics which take place in the specified events (comma-separated list of event IDs)
  stories?: string // Return only comics which contain the specified stories (comma-separated list of story IDs)
  sharedAppearances?: string // Return only comics in which the specified characters appear together (comma-separated list of character IDs)
  collaborators?: string // Return only comics in which the specified creators worked together (comma-separated list of creator IDs)
  orderBy?:
    | 'focDate'
    | 'onsaleDate'
    | 'title'
    | 'issueNumber'
    | 'modified'
    | '-focDate'
    | '-onsaleDate'
    | '-title'
    | '-issueNumber'
    | '-modified' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
}

const comicsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComics: builder.query<Comic[], ComicQueryParams | void>({
      query: (params = {}) => ({
        url: '/comics',
        params: { limit: 20, ...params },
      }),
      transformResponse: (res: ComicListResponse) => {
        if (!res?.data?.results) return []

        return res.data.results
      },
      providesTags: () => ['Comics'],
    }),
    getComicById: builder.query<Comic, string>({
      query: (id) => `/comics/${id}`,
      transformResponse: (res: ComicDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Comic not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Comics', id }],
    }),
    getComicsList: builder.query<
      PaginatedResponse<Comic>,
      ComicQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/comics',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Comic>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetComicsQuery,
  useGetComicByIdQuery,
  useGetComicsListQuery,
  useLazyGetComicByIdQuery,
} = comicsApi
