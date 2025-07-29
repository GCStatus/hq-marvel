import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import { ComicQueryParams, useGetComicsListQuery } from '@/services'
import type { Comic } from '@/types'

export interface ComicFilterInputs {
  titleStartsWith: string
  format: string
  dateDescriptor: 'lastWeek' | 'thisWeek' | 'nextWeek' | 'thisMonth'
  orderBy:
    | 'focDate'
    | 'onsaleDate'
    | 'title'
    | 'issueNumber'
    | 'modified'
    | '-focDate'
    | '-onsaleDate'
    | '-title'
    | '-issueNumber'
    | '-modified'
  characters: string
  series: string
  events: string
}

const ORDER_OPTIONS = {
  '-onsaleDate': 'On Sale Date (Newest)',
  onsaleDate: 'On Sale Date (Oldest)',
  '-focDate': 'FOC Date (Newest)',
  focDate: 'FOC Date (Oldest)',
  '-title': 'Title (Z-A)',
  title: 'Title (A-Z)',
  '-issueNumber': 'Issue Number (Desc)',
  issueNumber: 'Issue Number (Asc)',
}

const FORMAT_OPTIONS = {
  '': 'All',
  comic: 'Comic',
  magazine: 'Magazine',
  'trade paperback': 'Trade Paperback',
  hardcover: 'Hardcover',
  digest: 'Digest',
  'graphic novel': 'Graphic Novel',
  'digital comic': 'Digital Comic',
  'infinite comic': 'Infinite Comic',
}

const DATE_DESCRIPTOR_OPTIONS = {
  '': 'Anytime',
  lastWeek: 'Last Week',
  thisWeek: 'This Week',
  nextWeek: 'Next Week',
  thisMonth: 'This Month',
}

function useComicFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Comic[]>([])

  const { register, watch, reset } = useForm<ComicFilterInputs>({
    defaultValues: {
      titleStartsWith: '',
      format: '',
      dateDescriptor: 'lastWeek',
      orderBy: '-onsaleDate',
      characters: '',
      series: '',
      events: '',
    },
  })

  const formValues = watch()

  const [debouncedName] = useDebounce(formValues.titleStartsWith, 500)
  const [debouncedDateDescriptor] = useDebounce(
    formValues.dateDescriptor,
    500,
  )
  const [debouncedSeries] = useDebounce(formValues.series, 500)
  const [debouncedEvents] = useDebounce(formValues.events, 500)
  const [debouncedCharacters] = useDebounce(formValues.characters, 500)
  const [debouncedFormat] = useDebounce(formValues.format, 500)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedName,
    debouncedSeries,
    debouncedEvents,
    debouncedFormat,
    formValues.orderBy,
    debouncedCharacters,
    debouncedDateDescriptor,
  ])

  const queryParams: ComicQueryParams = {
    limit: 20,
    offset: (page - 1) * 20,
    orderBy: formValues.orderBy,
    ...(debouncedName && { titleStartsWith: debouncedName }),
    ...(debouncedFormat && { format: debouncedFormat }),
    ...(debouncedSeries && { series: debouncedSeries }),
    ...(debouncedEvents && { events: debouncedEvents }),
    ...(debouncedCharacters && { characters: debouncedCharacters }),
    ...(debouncedDateDescriptor && {
      dateDescriptor: debouncedDateDescriptor,
    }),
  }

  const { data, isLoading } = useGetComicsListQuery(queryParams, {
    selectFromResult: ({ data, isLoading, isFetching }) => ({
      data,
      isLoading: isLoading || isFetching,
    }),
  })

  useEffect(() => {
    if (data?.results && !isLoading) {
      setCombinedResults((prev) => {
        const existingIds = new Set(prev.map((c) => c.id))
        const newResults = data.results.filter(
          (c) => !existingIds.has(c.id),
        )

        return [...prev, ...newResults]
      })
    }
  }, [data, isLoading])

  const hasMore = data ? data.offset + data.count < data.total : false

  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  const handleReset = () => {
    reset()
  }

  return {
    register,
    handleReset,
    combinedResults,
    loadMore,
    isLoading,
    hasMore,
    ORDER_OPTIONS,
    FORMAT_OPTIONS,
    DATE_DESCRIPTOR_OPTIONS,
  }
}

export default useComicFilters
