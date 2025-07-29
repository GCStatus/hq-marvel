import { motion } from 'framer-motion'
import { memo } from 'react'

import {
  HeroContent,
  HeroImage,
  HeroName,
  HeroSection,
} from '../Detail.styles'

interface CreatorHeroProps {
  fullName: string
  thumbnail: { path: string; extension: string }
}

function HeroComponent({ fullName, thumbnail }: CreatorHeroProps) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <HeroSection $bg={imageUrl}>
      <HeroContent
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <HeroImage src={imageUrl} alt={fullName} />
        <HeroName>{fullName}</HeroName>
      </HeroContent>
    </HeroSection>
  )
}

export default memo(HeroComponent)
