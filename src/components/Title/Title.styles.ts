import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(2rem, 6vw, 4rem) 1.5rem;
  overflow: hidden;
`

export const HeroTitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  padding: 0 0.05em;
  will-change: transform, opacity, filter;
  color: transparent;
  background: linear-gradient(90deg, #ff4b2b, #ed1d24);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow:
    0 0 5px rgba(237, 29, 36, 0.5),
    0 0 15px rgba(237, 29, 36, 0.4),
    0 0 30px rgba(237, 29, 36, 0.3);
`

export const SubtitleWrapper = styled.div`
  overflow: hidden;
  margin-top: 1rem;
`

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #b0b0b0;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
  padding: 0 1rem;
  will-change: transform, opacity;
`

export const Underline = styled(motion.div)`
  height: 4px;
  width: 100px;
  background-color: #ed1d24;
  margin-top: 2rem;
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(237, 29, 36, 0.7);
  transform-origin: left;
  will-change: transform;
`

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
}

export const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(8px)',
    x: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 15, stiffness: 150 },
  },
}

export const subtitleWrapperVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const underlineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
}
