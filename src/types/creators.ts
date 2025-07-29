import {
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Summary,
  SummaryList,
  Url,
} from '.'

export interface Creator {
  id: number
  firstName: string
  middleName: string
  lastName: string
  suffix: string
  fullName: string
  modified: string
  resourceURI: string
  urls: Url[]
  thumbnail: Image
  series: SummaryList<Summary>
  stories: SummaryList<Summary>
  comics: SummaryList<Summary>
  events: SummaryList<Summary>
}

export type CreatorListResponse = MarvelApiResponse<
  PaginatedResponse<Creator>
>
export type CreatorDetailResponse = MarvelApiResponse<
  PaginatedResponse<Creator>
>
