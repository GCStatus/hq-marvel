import {
  Container,
  NoListResults,
  SeriesCard,
  SeriesCardSkeleton,
  Title,
  Wrapper,
} from '@/components'

import useSeriesFilters from './hooks'
import { LoadMoreButton, SeriesGrid } from './List.styles'
import { SeriesFilters } from './modules'

function List() {
  const {
    ORDER_OPTIONS,
    combinedResults,
    handleReset,
    hasMore,
    isLoading,
    loadMore,
    register,
  } = useSeriesFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Marvel Series Library"
          subtitle="Explore the sagas that define the Marvel Universe. From epic crossovers to character-defining solo runs."
        />

        <SeriesFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
        />

        <SeriesGrid>
          {combinedResults.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </SeriesGrid>

        {isLoading && (
          <SeriesGrid style={{ marginTop: '2.5rem' }}>
            {Array.from({ length: 8 }).map((_, index) => (
              <SeriesCardSkeleton key={index} />
            ))}
          </SeriesGrid>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Series Found" />
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
