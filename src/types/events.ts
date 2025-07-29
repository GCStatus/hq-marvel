import {
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Summary,
  SummaryList,
  Url,
} from '.'

export interface Event {
  id: number
  title: string
  description: string
  resourceURI: string
  urls: Url[]
  modified: string
  start: string | null
  end: string | null
  thumbnail: Image
  comics: SummaryList<Summary>
  stories: SummaryList<Summary>
  series: SummaryList<Summary>
  characters: SummaryList<Summary>
  creators: SummaryList<Summary>
  next: Summary | null
  previous: Summary | null
}

export type EventListResponse = MarvelApiResponse<PaginatedResponse<Event>>
export type EventDetailResponse = MarvelApiResponse<
  PaginatedResponse<Event>
>
