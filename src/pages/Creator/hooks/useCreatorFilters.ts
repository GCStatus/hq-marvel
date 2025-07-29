import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'

import { CreatorQueryParams, useGetCreatorsListQuery } from '@/services'
import type { Creator } from '@/types'

export interface CreatorFilterInputs {
  nameStartsWith: string
  orderBy?:
    | 'suffix'
    | 'firstName'
    | 'lastName'
    | 'middleName'
    | 'modified'
    | '-suffix'
    | '-firstName'
    | '-lastName'
    | '-middleName'
    | '-modified'
  comics: string
  series: string
  events: string
}

const ORDER_OPTIONS = {
  firstName: 'First Name (A-Z)',
  '-firstName': 'First Name (Z-A)',
  lastName: 'Last Name (A-Z)',
  '-lastName': 'Last Name (Z-A)',
  middleName: 'Middle Name (A-Z)',
  '-middleName': 'Middle Name (Z-A)',
  suffix: 'Suffix (A-Z)',
  '-suffix': 'Suffix (Z-A)',
  modified: 'Modified (Oldest)',
  '-modified': 'Modified (Newest)',
}

function useCreatorFilters() {
  const [page, setPage] = useState<number>(1)
  const [combinedResults, setCombinedResults] = useState<Creator[]>([])

  const { register, watch, reset } = useForm<CreatorFilterInputs>({
    defaultValues: {
      nameStartsWith: '',
      orderBy: 'firstName',
      comics: '',
      series: '',
      events: '',
    },
  })

  const formValues = watch()

  const [debouncedName] = useDebounce(formValues.nameStartsWith, 500)
  const [debouncedComics] = useDebounce(formValues.comics, 500)
  const [debouncedSeries] = useDebounce(formValues.series, 500)
  const [debouncedEvents] = useDebounce(formValues.events, 500)

  useEffect(() => {
    setCombinedResults([])
    setPage(1)
  }, [
    debouncedName,
    debouncedComics,
    debouncedSeries,
    debouncedEvents,
    formValues.orderBy,
  ])

  const queryParams: CreatorQueryParams = {
    limit: 20,
    offset: (page - 1) * 20,
    orderBy: formValues.orderBy,
    ...(debouncedName && { nameStartsWith: debouncedName }),
    ...(debouncedComics && { comics: debouncedComics }),
    ...(debouncedSeries && { series: debouncedSeries }),
    ...(debouncedEvents && { events: debouncedEvents }),
  }

  const { data, isLoading } = useGetCreatorsListQuery(queryParams, {
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

export default useCreatorFilters
