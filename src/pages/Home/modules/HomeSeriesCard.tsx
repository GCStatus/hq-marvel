import { memo } from 'react'

import type { Series } from '@/types'

import {
  contentVariants,
  fileVariants,
  SeriesFile,
  SeriesFileContent,
  SeriesFileCover,
  SeriesFileOverlay,
  SeriesFileTitle,
  SeriesInfo,
  YearBadge,
} from './HomeSeriesCard.styles'

interface SeriesCardProps {
  series: Series
}

function SeriesCard({ series }: SeriesCardProps) {
  const imageUrl = `${series.thumbnail.path}.${series.thumbnail.extension}`

  return (
    <SeriesFile variants={fileVariants}>
      <SeriesFileContent
        initial="rest"
        whileHover="hover"
        variants={contentVariants}>
        <SeriesFileCover
          style={{ backgroundImage: `url(${imageUrl})` }}
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <SeriesFileOverlay />
        <YearBadge>
          {series.startYear} - {series.endYear}
        </YearBadge>
        <SeriesInfo>
          <SeriesFileTitle>{series.title}</SeriesFileTitle>
        </SeriesInfo>
      </SeriesFileContent>
    </SeriesFile>
  )
}

export default memo(SeriesCard)
