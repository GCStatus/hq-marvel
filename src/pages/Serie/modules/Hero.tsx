import { motion } from 'framer-motion'
import { memo } from 'react'
import { FiBook, FiCalendar, FiStar } from 'react-icons/fi'

import {
  HeroBackground,
  HeroContent,
  HeroGraphicOverlay,
  HeroImage,
  HeroInfo,
  HeroSection,
  HeroStatItem,
  HeroStats,
  HeroTitle,
  itemVariants,
  sectionVariants,
} from '../Detail.styles'

interface SeriesHeroProps {
  title: string
  thumbnail: { path: string; extension: string }
  startYear: number
  endYear: number
  rating: string
  comicCount: number
}

function HeroComponent({
  title,
  thumbnail,
  startYear,
  endYear,
  rating,
  comicCount,
}: SeriesHeroProps) {
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
          <HeroStats>
            <HeroStatItem>
              <FiCalendar /> {startYear} – {endYear}
            </HeroStatItem>
            {rating && (
              <HeroStatItem>
                <FiStar /> {rating}
              </HeroStatItem>
            )}
            <HeroStatItem>
              <FiBook /> {comicCount} Comics
            </HeroStatItem>
          </HeroStats>
        </HeroInfo>
      </HeroContent>
    </HeroSection>
  )
}

export default memo(HeroComponent)
