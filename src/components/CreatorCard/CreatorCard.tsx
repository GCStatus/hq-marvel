import { memo, MouseEvent } from 'react'
import { FiBookOpen, FiFilm, FiTv } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Creator } from '@/types'

import {
  CardContent,
  CardGlare,
  CardImage,
  CardName,
  CardStats,
  CardTextWrapper,
  cardVariants,
  CreatorCardContainer,
  StatItem,
} from './CreatorCard.styles'

interface CreatorCardComponentProps {
  creator: Creator
}

function CreatorCardComponent({ creator }: CreatorCardComponentProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const fullName =
    `${creator.firstName} ${creator.lastName}`.trim() || 'Unknown'

  return (
    <Link
      to={`/creators/${creator.id}`}
      style={{ textDecoration: 'none' }}>
      <CreatorCardContainer
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onMouseMove={handleMouseMove}
        layout>
        <CardContent>
          <CardImage
            $bg={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
          />
          <CardGlare />
          <CardTextWrapper>
            <CardName>{fullName}</CardName>
            <CardStats>
              <StatItem>
                <FiBookOpen size={14} />
                <span>{creator.comics.available}</span> Comics
              </StatItem>
              <StatItem>
                <FiTv size={14} />
                <span>{creator.series.available}</span> Series
              </StatItem>
              <StatItem>
                <FiFilm size={14} />
                <span>{creator.stories.available}</span> Stories
              </StatItem>
            </CardStats>
          </CardTextWrapper>
        </CardContent>
      </CreatorCardContainer>
    </Link>
  )
}

export default memo(CreatorCardComponent)
