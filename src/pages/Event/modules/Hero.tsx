import { motion } from 'framer-motion'
import { memo } from 'react'

import {
  HeroBackground,
  HeroContent,
  HeroGraphicOverlay,
  HeroImage,
  HeroInfo,
  HeroSection,
  HeroTitle,
  itemVariants,
  sectionVariants,
  TimelineBar,
} from '../Detail.styles'

interface EventHeroProps {
  title: string
  thumbnail: { path: string; extension: string }
  start: string | null
  end: string | null
}

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'TBA'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

function HeroComponent({ title, thumbnail, start, end }: EventHeroProps) {
  return (
    <HeroSection>
      <HeroBackground $bg={`${thumbnail.path}.${thumbnail.extension}`} />
      <HeroGraphicOverlay />
      <HeroContent
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}>
        <HeroImage
          as={motion.img}
          variants={itemVariants}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
        />
        <HeroInfo as={motion.div} variants={itemVariants}>
          <HeroTitle>{title}</HeroTitle>
          <TimelineBar>
            <span>{formatDate(start)}</span>
            <div />
            <span>{formatDate(end)}</span>
          </TimelineBar>
        </HeroInfo>
      </HeroContent>
    </HeroSection>
  )
}

export default memo(HeroComponent)
