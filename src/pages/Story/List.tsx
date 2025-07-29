import { AnimatePresence } from 'framer-motion'

import {
  Container,
  NoListResults,
  StoryCard,
  StoryCardSkeleton,
  Title,
  Wrapper,
} from '@/components'

import useStoryFilters from './hooks'
import { listVariants, LoadMoreButton, StoryList } from './List.styles'
import { StoryFilters } from './modules'

function List() {
  const {
    ORDER_OPTIONS,
    combinedResults,
    handleReset,
    hasMore,
    isLoading,
    loadMore,
    register,
  } = useStoryFilters()

  return (
    <Wrapper>
      <Container>
        <Title
          title="Story Archive"
          subtitle="Explore the foundational narrative threads of the Marvel Universe. Every cover, interior story, and recap at your fingertips."
        />

        <StoryFilters
          register={register}
          handleReset={handleReset}
          orderOptions={ORDER_OPTIONS}
        />

        <StoryList
          variants={listVariants}
          initial="hidden"
          animate="visible">
          <AnimatePresence>
            {combinedResults.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </AnimatePresence>
        </StoryList>

        {isLoading && (
          <StoryList>
            {Array.from({ length: 8 }).map((_, index) => (
              <StoryCardSkeleton key={index} />
            ))}
          </StoryList>
        )}

        {!isLoading && combinedResults.length === 0 && (
          <NoListResults title="No Stories Found" />
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
