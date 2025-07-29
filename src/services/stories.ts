import type {
  MarvelApiResponse,
  PaginatedResponse,
  Story,
  StoryDetailResponse,
  StoryListResponse,
} from '@/types'

import baseApi from './base'

export interface StoryQueryParams {
  modifiedSince?: string // Return only stories which have been modified since the specified date (ISO 8601 format)
  comics?: string // Return only stories which appear in the specified comics (comma-separated list of comic IDs)
  series?: string // Return only stories which appear the specified series (comma-separated list of series IDs)
  events?: string // Return only stories which appear in the specified events (comma-separated list of event IDs)
  creators?: string // Return only stories which feature work by the specified creators (comma-separated list of creator IDs)
  characters?: string // Return only stories which feature the specified characters (comma-separated list of character IDs)
  orderBy?: 'id' | 'title' | 'modified' | '-id' | '-title' | '-modified' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
}

const storiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query<Story[], StoryQueryParams | void>({
      query: (params = {}) => ({
        url: '/stories',
        params: { limit: 20, ...params },
      }),
      transformResponse: (res: StoryListResponse) => {
        if (!res?.data?.results) return []

        return res.data.results
      },
      providesTags: () => ['Stories'],
    }),
    getStoryById: builder.query<Story, string>({
      query: (id) => `/stories/${id}`,
      transformResponse: (res: StoryDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Story not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Stories', id }],
    }),
    getStoriesList: builder.query<
      PaginatedResponse<Story>,
      StoryQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/stories',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Story>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetStoriesQuery,
  useGetStoryByIdQuery,
  useGetStoriesListQuery,
  useLazyGetStoryByIdQuery,
} = storiesApi
