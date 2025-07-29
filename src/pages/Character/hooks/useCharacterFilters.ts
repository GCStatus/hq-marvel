import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import {
  CharacterQueryParams,
  useGetCharactersListQuery,
} from '@/services'
import type { Character } from '@/types'

export interface CharacterFilterInputs {
  nameStartsWith: string
  orderBy: 'name' | 'modified' | '-name' | '-modified'
  comics: string
  series: string
  events: string
  stories: string
}

const ORDER_OPTIONS = {
  name: 'Name (A-Z)',
  '-name': 'Name (Z-A)',
  modified: 'Modified (Oldest)',
  '-modified': 'Modified (Newest)',
}

function useCharacterFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Character[]>([])

  const { register, watch, reset } = useForm<CharacterFilterInputs>({
    defaultValues: {
      nameStartsWith: '',
      orderBy: '-modified',
      comics: '',
      series: '',
      events: '',
      stories: '',
    },
  })

  const formValues = watch()

  const [debouncedName] = useDebounce(formValues.nameStartsWith, 500)
  const [debouncedComics] = useDebounce(formValues.comics, 500)
  const [debouncedSeries] = useDebounce(formValues.series, 500)
  const [debouncedEvents] = useDebounce(formValues.events, 500)
  const [debouncedStories] = useDebounce(formValues.stories, 500)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedName,
    debouncedComics,
    debouncedSeries,
    debouncedEvents,
    debouncedStories,
    formValues.orderBy,
  ])

  const queryParams: CharacterQueryParams = {
    limit: 20,
    offset: (page - 1) * 20,
    orderBy: formValues.orderBy,
    ...(debouncedName && { nameStartsWith: debouncedName }),
    ...(debouncedComics && { comics: debouncedComics }),
    ...(debouncedSeries && { series: debouncedSeries }),
    ...(debouncedEvents && { events: debouncedEvents }),
    ...(debouncedStories && { stories: debouncedStories }),
  }

  const { data, isLoading } = useGetCharactersListQuery(queryParams, {
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

export default useCharacterFilters
