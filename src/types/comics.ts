import {
  DateItem,
  Image,
  MarvelApiResponse,
  PaginatedResponse,
  Price,
  Summary,
  SummaryList,
  TextObject,
  Url,
} from '.'

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string | null
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: Summary
  variants: Summary[]
  collections: Summary[]
  collectedIssues: Summary[]
  dates: DateItem[]
  prices: Price[]
  thumbnail: Image
  images: Image[]
  creators: SummaryList<Summary>
  characters: SummaryList<Summary>
  stories: SummaryList<Summary>
  events: SummaryList<Summary>
}

export type ComicListResponse = MarvelApiResponse<PaginatedResponse<Comic>>
export type ComicDetailResponse = MarvelApiResponse<
  PaginatedResponse<Comic>
>
