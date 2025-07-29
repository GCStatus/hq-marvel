import { useState } from 'react'

import { ComicCard, Container, Title, VirtualizedGrid } from '@/components'
import { useGetComicsQuery } from '@/services'

import {
  LoadMoreButton,
  LoadMoreWrapper,
  MissionBriefingsSection,
  SectionTitle,
} from './Comics.styles'

const INITIAL_LOAD = 12
const LOAD_MORE_increment = 8

function Comics() {
  const {
    data: comics = [],
    isLoading,
    isError,
  } = useGetComicsQuery({ limit: 20 })
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_LOAD)

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_increment)
  }

  if (isLoading) {
    return <SectionTitle>STATUS: SCANNING COMIC ARCHIVES...</SectionTitle>
  }

  if (isError || !comics.length) {
    return (
      <SectionTitle>
        ARCHIVE SIGNAL LOST. CONTACT STARK INDUSTRIES.
      </SectionTitle>
    )
  }

  return (
    <MissionBriefingsSection>
      <Title title="Classified archives" />

      <Container>
        <VirtualizedGrid
          items={comics}
          aspectRatio={9 / 6}
          renderItem={(comic) => <ComicCard comic={comic} />}
        />
      </Container>

      {visibleCount < comics.length && (
        <LoadMoreWrapper>
          <LoadMoreButton onClick={handleLoadMore}>
            <span data-text="[LOAD_MORE]"> [LOAD_MORE]</span>
          </LoadMoreButton>
        </LoadMoreWrapper>
      )}
    </MissionBriefingsSection>
  )
}

export default Comics
