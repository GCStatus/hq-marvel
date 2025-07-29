import { memo } from 'react'

import {
  SkeletonCardContainer,
  SkeletonCardContent,
  SkeletonDataPanel,
  SkeletonTextLine,
} from './ComicCardSkeleton.styles'

function ComicCardSkeletonComponent() {
  return (
    <SkeletonCardContainer>
      <SkeletonCardContent>
        <SkeletonDataPanel>
          <SkeletonTextLine width="40%" />
          <SkeletonTextLine width="80%" />
          <SkeletonTextLine width="100%" />{' '}
        </SkeletonDataPanel>
      </SkeletonCardContent>
    </SkeletonCardContainer>
  )
}

export default memo(ComicCardSkeletonComponent)
