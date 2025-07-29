import type {
  Event,
  EventDetailResponse,
  EventListResponse,
  MarvelApiResponse,
  PaginatedResponse,
} from '@/types'

import baseApi from './base'

export interface EventQueryParams {
  name?: string // Return only events matching the specified full event name (e.g. Civil War)
  nameStartsWith?: string // Return events with names that begin with the specified string (e.g. Ci)
  modifiedSince?: string // Return only events which have been modified since the specified date (ISO 8601 format)
  creators?: string // Return only events which feature work by the specified creators (comma-separated list of creator IDs)
  characters?: string // Return only events which feature the specified characters (comma-separated list of character IDs)
  series?: string // Return only events which are part of the specified series (comma-separated list of series IDs)
  comics?: string // Return only events which take place in the specified comics (comma-separated list of comic IDs)
  stories?: string // Return only events which take place in the specified stories (comma-separated list of story IDs)
  orderBy?:
    | 'name'
    | 'startDate'
    | 'modified'
    | '-name'
    | '-startDate'
    | '-modified' // Order the result set by a field or fields (use '-' for descending)
  limit?: number // Limit the result set to the specified number of resources (1-100)
  offset?: number // Skip the specified number of resources in the result set
}

const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], EventQueryParams | void>({
      query: (params = {}) => ({
        url: '/events',
        params: { limit: 20, ...params },
      }),
      transformResponse: (res: EventListResponse) => {
        if (!res?.data?.results) return []

        return res.data.results
      },
      providesTags: () => ['Events'],
    }),
    getEventById: builder.query<Event, string>({
      query: (id) => `/events/${id}`,
      transformResponse: (res: EventDetailResponse) => {
        if (!res?.data?.results?.[0]) {
          throw new Error('Event not found')
        }

        return res.data.results[0]
      },
      providesTags: (_, __, id) => [{ type: 'Events', id }],
    }),
    getEventsList: builder.query<
      PaginatedResponse<Event>,
      EventQueryParams | void
    >({
      query: (params = {}) => ({
        url: '/events',
        params: { limit: 20, ...params },
      }),
      transformResponse: (
        res: MarvelApiResponse<PaginatedResponse<Event>>,
      ) => res.data,
    }),
  }),
})

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useGetEventsListQuery,
  useLazyGetEventByIdQuery,
} = eventsApi
