import { memo } from 'react'

import {
  SkeletonInfo,
  SkeletonLine,
  SkeletonRowContainer,
  SkeletonRowContent,
  SkeletonStats,
} from './StoryCardSkeleton.styles'

function StoryCardSkeletonComponent() {
  return (
    <SkeletonRowContainer>
      <SkeletonRowContent>
        <SkeletonInfo>
          <SkeletonLine height="1.2rem" width="85%" />
          <SkeletonLine height="0.9rem" width="40%" />
        </SkeletonInfo>

        <SkeletonStats>
          <SkeletonLine height="1.2rem" width="90%" />
          <SkeletonLine height="1.2rem" width="100%" />
        </SkeletonStats>

        <div>
          <SkeletonLine height="1.2rem" width="100px" />
        </div>
      </SkeletonRowContent>
    </SkeletonRowContainer>
  )
}

export default memo(StoryCardSkeletonComponent)
