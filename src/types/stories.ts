import {
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Summary,
  SummaryList,
} from '.'

export interface Story {
  id: number
  title: string
  description: string
  resourceURI: string
  type: string
  modified: string
  thumbnail: Image | null
  comics: SummaryList<Summary>
  series: SummaryList<Summary>
  events: SummaryList<Summary>
  characters: SummaryList<Summary>
  creators: SummaryList<Summary>
  originalIssue: Summary
}

export type StoryListResponse = MarvelApiResponse<PaginatedResponse<Story>>
export type StoryDetailResponse = MarvelApiResponse<
  PaginatedResponse<Story>
>
