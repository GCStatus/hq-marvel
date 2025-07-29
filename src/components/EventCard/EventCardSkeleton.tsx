import { memo } from 'react'

import {
  SkeletonCardContainer,
  SkeletonLine,
  SkeletonTextWrapper,
} from './EventCardSkeleton.styles'

function EventCardSkeletonComponent() {
  return (
    <SkeletonCardContainer>
      <SkeletonTextWrapper>
        <SkeletonLine height="1rem" width="30%" />
        <SkeletonLine height="2.5rem" width="90%" />
      </SkeletonTextWrapper>
    </SkeletonCardContainer>
  )
}

export default memo(EventCardSkeletonComponent)
