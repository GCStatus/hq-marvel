import {
  Container,
  CreatorCard,
  CreatorCardSkeleton,
  NoListResults,
  Title,
  VirtualizedGrid,
  Wrapper,
} from '@/components'

import useCreatorFilters from './hooks'
import { CreatorGrid, LoadMoreButton } from './List.styles'
import { CreatorFilters } from './modules'

function List() {
  const {
    register,
    handleReset,
    hasMore,
    isLoading,
    loadMore,
    combinedResults,
    ORDER_OPTIONS,
  } = useCreatorFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Marvel's Architects"
          subtitle="Meet the legendary writers, artists, and creators who built the Marvel Universe."
        />

        <CreatorFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
        />

        {combinedResults.length > 0 && (
          <VirtualizedGrid
            aspectRatio={5 / 4.2}
            items={combinedResults}
            renderItem={(creator) => <CreatorCard creator={creator} />}
          />
        )}

        {isLoading && (
          <CreatorGrid>
            {Array.from({ length: 8 }).map((_, index) => (
              <CreatorCardSkeleton key={index} />
            ))}
          </CreatorGrid>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Creators Found" />
        )}

        {!isLoading && hasMore && (
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            Load More
          </LoadMoreButton>
        )}
      </Container>
    </Wrapper>
  )
}

export default List
