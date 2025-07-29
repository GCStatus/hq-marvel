import { useEffect, useState } from 'react'

import { LoadingScreen, Wrapper } from '@/components'
import { useGetFeaturedCharactersQuery } from '@/services'
import type { Character } from '@/types'

import { Breach, Comics, Series } from './modules'

function Home() {
  const { featuredCharacters, isLoading } = useGetFeaturedCharactersQuery(
    undefined,
    {
      selectFromResult: ({ data = [], isLoading, isFetching }) => ({
        featuredCharacters: data,
        isLoading: isLoading || isFetching,
      }),
    },
  )

  const [shuffledCharacters, setShuffledCharacters] = useState<
    Character[]
  >([])

  useEffect(() => {
    if (isLoading) return

    if (featuredCharacters) {
      const shuffled = [...featuredCharacters].sort(
        () => Math.random() - 0.5,
      )

      setShuffledCharacters(shuffled)
    }
  }, [featuredCharacters, isLoading])

  if (isLoading) return <LoadingScreen />

  return (
    <Wrapper>
      <Breach shuffledCharacters={shuffledCharacters} />
      <Comics />
      <Series />
    </Wrapper>
  )
}

export default Home
