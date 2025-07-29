import { useMotionValue, useTransform } from 'framer-motion'
import { memo } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Series } from '@/types'

import {
  BannerImage,
  BannerInfo,
  BannerStats,
  BannerTitle,
  BannerYears,
  CardBorder,
  CardContent,
  CardGlow,
  cardVariants,
  SeriesCardContainer,
  StatItem,
  ViewSeriesButton,
} from './SeriesCard.styles'

interface SeriesCardProps {
  series: Series
}

function SeriesCardComponent({ series }: SeriesCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const imageX = useTransform(x, (latest) => latest / 25)
  const imageY = useTransform(y, (latest) => latest / 25)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const imageUrl = `${series.thumbnail.path}.${series.thumbnail.extension}`

  return (
    <Link to={`/series/${series.id}`} style={{ textDecoration: 'none' }}>
      <SeriesCardContainer
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        layout>
        <CardContent>
          <BannerImage $bg={imageUrl} style={{ x: imageX, y: imageY }} />
          <BannerInfo>
            <div>
              <BannerYears>
                {series.startYear} – {series.endYear}
              </BannerYears>
              <BannerTitle>{series.title}</BannerTitle>
            </div>
            <BannerStats>
              <StatItem>
                <strong>{series.comics.available}</strong> Comics
              </StatItem>
              <StatItem>
                <strong>{series.characters.available}</strong> Characters
              </StatItem>
              <ViewSeriesButton>
                View <FiChevronRight />
              </ViewSeriesButton>
            </BannerStats>
          </BannerInfo>
        </CardContent>
        <CardBorder />
        <CardGlow />
      </SeriesCardContainer>
    </Link>
  )
}

export default memo(SeriesCardComponent)
