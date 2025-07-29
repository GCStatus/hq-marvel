import { motion } from 'framer-motion'
import { memo } from 'react'

import {
  HeroContent,
  HeroCover,
  HeroSection,
  HeroTitle,
  ParallaxBackground,
} from '../Detail.styles'

interface DetailHeroProps {
  id: string
  title: string
  coverUrl: string
  backgroundUrl: string
}
function HeroComponent({
  id,
  title,
  coverUrl,
  backgroundUrl,
}: DetailHeroProps) {
  return (
    <>
      <ParallaxBackground $bg={backgroundUrl} />
      <HeroSection>
        <HeroContent>
          <HeroCover
            as={motion.img}
            layoutId={`comic-cover-${id}`}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            src={coverUrl}
            alt={title}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}>
            <HeroTitle>{title}</HeroTitle>
          </motion.div>
        </HeroContent>
      </HeroSection>
    </>
  )
}

export default memo(HeroComponent)
