import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import { SeriesQueryParams, useGetSeriesListQuery } from '@/services'
import type { Series } from '@/types'

export interface SeriesFilterInputs {
  titleStartsWith: string
  startYear: string
  orderBy:
    | 'title'
    | 'modified'
    | 'startYear'
    | '-title'
    | '-modified'
    | '-startYear'
  comics: string
  characters: string
  creators: string
}

const ORDER_OPTIONS = {
  title: 'Title (A-Z)',
  '-title': 'Title (Z-A)',
  startYear: 'Start Year (Oldest)',
  '-startYear': 'Start Year (Newest)',
  modified: 'Modified (Oldest)',
  '-modified': 'Modified (Newest)',
}

function useSeriesFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Series[]>([])

  const { register, watch, reset } = useForm<SeriesFilterInputs>({
    defaultValues: {
      titleStartsWith: '',
      startYear: '',
      orderBy: '-startYear',
      comics: '',
      characters: '',
      creators: '',
    },
  })

  const formValues = watch()

  const [debouncedTitle] = useDebounce(formValues.titleStartsWith, 500)
  const [debouncedStartYear] = useDebounce(formValues.startYear, 500)
  const [debouncedComics] = useDebounce(formValues.comics, 800)
  const [debouncedCharacters] = useDebounce(formValues.characters, 800)
  const [debouncedCreators] = useDebounce(formValues.creators, 800)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedTitle,
    debouncedStartYear,
    debouncedComics,
    debouncedCharacters,
    debouncedCreators,
    formValues.orderBy,
  ])

  const queryParams: SeriesQueryParams = {
    limit: 20,
    offset: (page - 1) * 20,
    orderBy: formValues.orderBy as SeriesQueryParams['orderBy'],
    ...(debouncedTitle && { titleStartsWith: debouncedTitle }),
    ...(debouncedStartYear && { startYear: parseInt(debouncedStartYear) }),
    ...(debouncedComics && { comics: debouncedComics }),
    ...(debouncedCharacters && { characters: debouncedCharacters }),
    ...(debouncedCreators && { creators: debouncedCreators }),
  }

  const { data, isLoading } = useGetSeriesListQuery(queryParams, {
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
  }
}

export default useSeriesFilters
