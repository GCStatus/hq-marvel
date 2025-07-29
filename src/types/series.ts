import {
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Summary,
  SummaryList,
  Url,
} from '.'

export interface Series {
  id: number
  title: string
  description: string | null
  resourceURI: string
  urls: Url[]
  startYear: number
  endYear: number
  rating: string
  modified: string
  thumbnail: Image
  comics: SummaryList<Summary>
  stories: SummaryList<Summary>
  events: SummaryList<Summary>
  characters: SummaryList<Summary>
  creators: SummaryList<Summary>
  next: Summary | null
  previous: Summary | null
  type: string
}

export type SeriesListResponse = MarvelApiResponse<
  PaginatedResponse<Series>
>
export type SeriesDetailResponse = MarvelApiResponse<
  PaginatedResponse<Series>
>
