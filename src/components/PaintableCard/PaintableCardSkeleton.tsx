import { memo } from 'react'

import {
  SkeletonCard,
  SkeletonText,
  SkeletonTextWrapper,
} from './PaintableCardSkeleton.styles'

function PaintableCardSkeletonComponent() {
  return (
    <SkeletonCard>
      <SkeletonTextWrapper>
        <SkeletonText />
      </SkeletonTextWrapper>
    </SkeletonCard>
  )
}

export default memo(PaintableCardSkeletonComponent)
