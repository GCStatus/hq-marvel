import { memo } from 'react'

import {
  SkeletonCardContainer,
  SkeletonLine,
  SkeletonStatsWrapper,
  SkeletonTextWrapper,
} from './CreatorCardSkeleton.styles'

function CreatorCardSkeletonComponent() {
  return (
    <SkeletonCardContainer>
      <SkeletonTextWrapper>
        <SkeletonLine height="2rem" width="80%" />

        <SkeletonStatsWrapper>
          <SkeletonLine height="1rem" width="60%" />
          <SkeletonLine height="1rem" width="50%" />
          <SkeletonLine height="1rem" width="55%" />
        </SkeletonStatsWrapper>
      </SkeletonTextWrapper>
    </SkeletonCardContainer>
  )
}

export default memo(CreatorCardSkeletonComponent)
