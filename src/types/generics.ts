export interface MarvelApiResponse<T> {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: T
}

export interface PaginatedResponse<T> {
  offset: number
  limit: number
  total: number
  count: number
  results: T[]
}

export interface Image {
  path: string
  extension: string
}

export interface Url {
  type: string
  url: string
}

export interface DateItem {
  type: string
  date: string
}

export interface Price {
  type: string
  price: number
}

export interface TextObject {
  type: string
  language: string
  text: string
}

export interface Summary {
  resourceURI: string
  name: string
  role?: string
  type?: string
}

export interface SummaryList<T extends Summary> {
  available: number
  returned: number
  collectionURI: string
  items: T[]
}
