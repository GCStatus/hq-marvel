import { motion } from 'framer-motion'
import { memo } from 'react'

import {
  HeroContent,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  itemVariants,
  sectionVariants,
} from '../Detail.styles'

interface StoryHeroProps {
  title: string
  type: string
}

function HeroComponent({ title, type }: StoryHeroProps) {
  return (
    <HeroSection>
      <HeroContent
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}>
        <motion.div variants={itemVariants}>
          <HeroSubtitle>
            CLASSIFIED STORY DOSSIER: {type.toUpperCase()}
          </HeroSubtitle>
          <HeroTitle>{title}</HeroTitle>
        </motion.div>
      </HeroContent>
    </HeroSection>
  )
}

export default memo(HeroComponent)
