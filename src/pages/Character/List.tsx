import {
  Container,
  NoListResults,
  PaintableCard,
  PaintableCardSkeleton,
  Title,
  Wrapper,
} from '@/components'

import { useCharacterFilters } from './hooks'
import { CharacterGrid, LoadMoreButton } from './List.styles'
import { CharacterFilters } from './modules'

function CharactersPage() {
  const {
    register,
    handleReset,
    combinedResults,
    loadMore,
    isLoading,
    hasMore,
    ORDER_OPTIONS,
  } = useCharacterFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Character Database"
          subtitle="Search, filter, and explore the complete roster of Marvel heroes and villains."
        />

        <CharacterFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
        />

        <CharacterGrid>
          {combinedResults.map((character) => (
            <PaintableCard
              key={character.id}
              title={character.name}
              url={`/characters/${character.id}`}
              thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </CharacterGrid>

        {isLoading && (
          <CharacterGrid style={{ marginTop: '2.5rem' }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <PaintableCardSkeleton key={index} />
            ))}
          </CharacterGrid>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Characters Found" />
        )}

        {hasMore && (
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load More'}
          </LoadMoreButton>
        )}
      </Container>
    </Wrapper>
  )
}

export default CharactersPage
