import { motion } from 'framer-motion'
import { memo } from 'react'
import { IoCalendar } from 'react-icons/io5'

import {
  CharacterName,
  heroContainerVariants,
  HeroContent,
  HeroGridOverlay,
  HeroImage,
  HeroSection,
  HeroVignette,
  itemVariants,
  LastModified,
  letterVariants,
  nameContainerVariants,
} from '../Detail.styles'

interface CharacterHeroProps {
  name: string
  modified: string
  thumbnail: { path: string; extension: string }
}

function HeroComponent({ name, modified, thumbnail }: CharacterHeroProps) {
  return (
    <HeroSection>
      <HeroImage $bg={`${thumbnail.path}.${thumbnail.extension}`} />
      <HeroVignette />
      <HeroGridOverlay />
      <HeroContent as={motion.div} variants={heroContainerVariants}>
        <CharacterName as={motion.h1} variants={nameContainerVariants}>
          {name.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </CharacterName>
        <motion.div variants={itemVariants}>
          <LastModified>
            <IoCalendar size={14} />
            Last Update: {new Date(modified).toLocaleDateString()}
          </LastModified>
        </motion.div>
      </HeroContent>
    </HeroSection>
  )
}

export default memo(HeroComponent)
