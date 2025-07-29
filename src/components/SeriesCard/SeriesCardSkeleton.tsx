import { memo } from 'react'

import {
  SkeletonCardContainer,
  SkeletonContent,
  SkeletonImagePlaceholder,
  SkeletonInfo,
  SkeletonLine,
} from './SeriesCardSkeleton.styles'

function SeriesCardSkeletonComponent() {
  return (
    <SkeletonCardContainer>
      <SkeletonContent>
        <SkeletonImagePlaceholder />

        <SkeletonInfo>
          <div>
            <SkeletonLine height="1.2rem" width="40%" />

            <SkeletonLine height="3rem" width="90%" />
          </div>
          <div>
            <SkeletonLine height="1.2rem" width="70%" />
          </div>
        </SkeletonInfo>
      </SkeletonContent>
    </SkeletonCardContainer>
  )
}

export default memo(SeriesCardSkeletonComponent)
