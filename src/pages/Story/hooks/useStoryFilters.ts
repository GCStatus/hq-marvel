import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import { StoryQueryParams, useGetStoriesListQuery } from '@/services'
import type { Story } from '@/types'

export interface StoryFilterInputs {
  orderBy: 'id' | 'title' | 'modified' | '-id' | '-title' | '-modified'
  comics: string
  series: string
  events: string
  creators: string
}

const ORDER_OPTIONS = {
  modified: 'Modified (Oldest)',
  '-modified': 'Modified (Newest)',
  id: 'ID (Ascending)',
  '-id': 'ID (Descending)',
}

function useStoryFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Story[]>([])

  const { register, watch, reset } = useForm<StoryFilterInputs>({
    defaultValues: {
      orderBy: '-modified',
      comics: '',
      series: '',
      events: '',
      creators: '',
    },
  })

  const formValues = watch()

  const [debouncedComics] = useDebounce(formValues.comics, 800)
  const [debouncedSeries] = useDebounce(formValues.series, 800)
  const [debouncedEvents] = useDebounce(formValues.events, 800)
  const [debouncedCreators] = useDebounce(formValues.creators, 800)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedComics,
    debouncedSeries,
    debouncedEvents,
    debouncedCreators,
    formValues.orderBy,
  ])

  const queryParams: StoryQueryParams = {
    limit: 25,
    offset: (page - 1) * 25,
    orderBy: formValues.orderBy as StoryQueryParams['orderBy'],
    ...(debouncedComics && { comics: debouncedComics }),
    ...(debouncedSeries && { series: debouncedSeries }),
    ...(debouncedEvents && { events: debouncedEvents }),
    ...(debouncedCreators && { creators: debouncedCreators }),
  }

  const { data, isLoading } = useGetStoriesListQuery(queryParams, {
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

export default useStoryFilters
