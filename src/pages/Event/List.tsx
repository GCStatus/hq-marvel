import {
  Container,
  EventCard,
  EventCardSkeleton,
  NoListResults,
  Title,
  VirtualizedGrid,
  Wrapper,
} from '@/components'

import useEventFilters from './hooks'
import { EventGrid, LoadMoreButton } from './List.styles'
import { EventFilters } from './modules'

function List() {
  const {
    ORDER_OPTIONS,
    combinedResults,
    handleReset,
    hasMore,
    isLoading,
    loadMore,
    register,
  } = useEventFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Event Timeline"
          subtitle="Witness the universe-altering sagas that challenged heroes and reshaped the Marvel landscape forever."
        />

        <EventFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
        />

        {combinedResults.length > 0 && (
          <VirtualizedGrid
            aspectRatio={8 / 5.6}
            items={combinedResults}
            renderItem={(event) => <EventCard event={event} />}
          />
        )}

        {isLoading && (
          <EventGrid>
            {Array.from({ length: 9 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
          </EventGrid>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Events Found" />
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

export default List
