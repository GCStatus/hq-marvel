import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import { EventQueryParams, useGetEventsListQuery } from '@/services'
import type { Event } from '@/types'

export interface EventFilterInputs {
  nameStartsWith: string
  orderBy:
    | 'name'
    | 'startDate'
    | 'modified'
    | '-name'
    | '-startDate'
    | '-modified'
  creators: string
  characters: string
  comics: string
  series: string
}

const ORDER_OPTIONS = {
  '-startDate': 'Start Date (Newest)',
  startDate: 'Start Date (Oldest)',
  name: 'Name (A-Z)',
  '-name': 'Name (Z-A)',
  modified: 'Modified (Oldest)',
  '-modified': 'Modified (Newest)',
}

function useEventFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Event[]>([])

  const { register, watch, reset } = useForm<EventFilterInputs>({
    defaultValues: {
      nameStartsWith: '',
      orderBy: '-startDate',
      creators: '',
      characters: '',
      comics: '',
      series: '',
    },
  })

  const formValues = watch()

  const [debouncedName] = useDebounce(formValues.nameStartsWith, 500)
  const [debouncedCreators] = useDebounce(formValues.creators, 800)
  const [debouncedCharacters] = useDebounce(formValues.characters, 800)
  const [debouncedComics] = useDebounce(formValues.comics, 800)
  const [debouncedSeries] = useDebounce(formValues.series, 800)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedName,
    debouncedComics,
    debouncedSeries,
    debouncedCreators,
    debouncedCharacters,
    formValues.orderBy,
  ])

  const queryParams: EventQueryParams = {
    limit: 20,
    offset: (page - 1) * 20,
    orderBy: formValues.orderBy as EventQueryParams['orderBy'],
    ...(debouncedName && { nameStartsWith: debouncedName }),
    ...(debouncedCreators && { creators: debouncedCreators }),
    ...(debouncedCharacters && { characters: debouncedCharacters }),
    ...(debouncedComics && { comics: debouncedComics }),
    ...(debouncedSeries && { series: debouncedSeries }),
  }

  const { data, isLoading } = useGetEventsListQuery(queryParams, {
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

export default useEventFilters
