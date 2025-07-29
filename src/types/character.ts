import {
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Summary,
  SummaryList,
  Url,
} from '.'

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  resourceURI: string
  urls: Url[]
  thumbnail: Image
  comics: SummaryList<Summary>
  stories: SummaryList<Summary>
  events: SummaryList<Summary>
  series: SummaryList<Summary>
}

export type CharacterListResponse = MarvelApiResponse<
  PaginatedResponse<Character>
>
export type CharacterDetailResponse = MarvelApiResponse<
  PaginatedResponse<Character>
>
