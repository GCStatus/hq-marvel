import { motion, useInView } from 'framer-motion'
import { memo, ReactNode, useRef } from 'react'
import { Link } from 'react-router-dom'

import {
  CardContent,
  CardImage,
  CardName,
  CardOverlay,
  CardTextWrapper,
  cardVariants,
  NameShield,
  PaintableCard,
} from './PaintableCard.styles'

interface PaintableCardProps {
  url?: string
  title: string
  thumbnail: string
}

function PaintableCardComponent({
  url,
  title,
  thumbnail,
}: PaintableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '100px' })

  const CardInnerContent: ReactNode = (
    <CardContent>
      <CardImage $bg={thumbnail} $isLoaded={isInView} />
      <CardOverlay />
      <CardTextWrapper>
        <NameShield>
          <CardName>{title}</CardName>
        </NameShield>
      </CardTextWrapper>
    </CardContent>
  )

  return (
    <PaintableCard
      ref={cardRef}
      as={motion.div}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover="hover"
      layout>
      {url ? (
        <Link to={url} style={{ textDecoration: 'none' }}>
          {CardInnerContent}
        </Link>
      ) : (
        CardInnerContent
      )}
    </PaintableCard>
  )
}

export default memo(PaintableCardComponent)
