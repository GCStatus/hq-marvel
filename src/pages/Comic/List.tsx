import {
  ComicCard,
  ComicCardSkeleton,
  Container,
  NoListResults,
  Title,
  VirtualizedGrid,
  Wrapper,
} from '@/components'

import { useComicFilters } from './hooks'
import { LoadMoreButton, SkeletonGrid } from './List.styles'
import { ComicFilters } from './modules'

function ComicList() {
  const {
    register,
    handleReset,
    combinedResults,
    loadMore,
    isLoading,
    hasMore,
    ORDER_OPTIONS,
    FORMAT_OPTIONS,
    DATE_DESCRIPTOR_OPTIONS,
  } = useComicFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Comic Book Archive"
          subtitle="Dive into the vast library of Marvel Comics. Explore decades of stories, from iconic first issues to epic crossover events."
        />

        <ComicFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
          formatOptions={FORMAT_OPTIONS}
          dateDescriptorOptions={DATE_DESCRIPTOR_OPTIONS}
        />

        {combinedResults.length > 0 && (
          <VirtualizedGrid
            aspectRatio={9 / 6}
            items={combinedResults}
            renderItem={(comic) => <ComicCard comic={comic} />}
          />
        )}

        {isLoading && (
          <SkeletonGrid>
            {Array.from({ length: 8 }).map((_, index) => (
              <ComicCardSkeleton key={index} />
            ))}
          </SkeletonGrid>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Comics Found" />
        )}

        {!isLoading && hasMore && (
          <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
        )}
      </Container>
    </Wrapper>
  )
}

export default ComicList
