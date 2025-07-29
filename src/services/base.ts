import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import MD5 from 'crypto-js/md5'

import { baseUrl, privateKey, publicKey } from '@/constants'

export const tagTypes = [
  'Characters',
  'Comics',
  'Creators',
  'Events',
  'Series',
  'Stories',
  'FeaturedCharacters',
] as const

const baseQuery = fetchBaseQuery({
  baseUrl,
})

export const baseQueryFn: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const ts = Date.now().toString()
  const hash = MD5(ts + privateKey + publicKey).toString()

  const fetchArgs = typeof args === 'string' ? { url: args } : { ...args }

  fetchArgs.params = {
    ...(fetchArgs.params || {}),
    ts,
    hash,
    apikey: publicKey,
  }

  return await baseQuery(fetchArgs, api, extraOptions)
}

const baseApi = createApi({
  baseQuery: baseQueryFn,
  tagTypes,
  endpoints: () => ({}),
})

export default baseApi
