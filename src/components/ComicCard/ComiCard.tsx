import { useMotionValue, useTransform } from 'framer-motion'
import { memo, MouseEvent, useRef } from 'react'
import { Link } from 'react-router-dom'

import type { Comic } from '@/types'

import {
  CardBorder,
  cardVariants,
  ComicCardContainer,
  ComicCardContent,
  ComicCover,
  ComicInfo,
  ComicTitle,
  coverVariants,
  CtaButton,
  dataItemVariants,
  DataPanel,
  dataPanelVariants,
  Scanline,
} from './ComicCard.styles'

interface ComicCardProps {
  comic: Comic
}

function ComicCard({ comic }: ComicCardProps) {
  const rectRef = useRef<DOMRect | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-150, 150], [15, -15])
  const rotateY = useTransform(x, [-150, 150], [-15, 15])

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    rectRef.current = event.currentTarget.getBoundingClientRect()
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) {
      rectRef.current = event.currentTarget.getBoundingClientRect()
    }

    const rect = rectRef.current

    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    rectRef.current = null
    x.set(0)
    y.set(0)
  }

  const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`

  return (
    <Link to={`/comics/${comic.id}`} style={{ textDecoration: 'none' }}>
      <ComicCardContainer variants={cardVariants}>
        <ComicCardContent
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
          <CardBorder />
          <Scanline />
          <ComicCover
            style={{ backgroundImage: `url(${imageUrl})` }}
            variants={coverVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <DataPanel variants={dataPanelVariants}>
            <ComicInfo variants={dataItemVariants}>
              FILE ID: {comic.id}
            </ComicInfo>
            <ComicTitle variants={dataItemVariants}>
              {comic.title}
            </ComicTitle>
            <CtaButton variants={dataItemVariants}>Access File</CtaButton>
          </DataPanel>
        </ComicCardContent>
      </ComicCardContainer>
    </Link>
  )
}

export default memo(ComicCard)
