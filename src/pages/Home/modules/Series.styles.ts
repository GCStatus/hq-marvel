import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 8px #FF0000, 0 0 10px #FF0000; }
  50% { text-shadow: 0 0 6px #FF0000, 0 0 8px #FF0000; }
`

export const MissionBriefingsSection = styled(motion.section)`
  background-color: #000000;
  position: relative;
  overflow: hidden;
  border-top: 2px solid rgba(255, 0, 0, 0.5);
`

export const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
  padding: 0 20px;
`

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  animation: ${textGlow} 4s infinite;
  text-shadow:
    0 0 10px #ff0000,
    0 0 12px #ff0000;
`

export const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #cccccc;
  margin-top: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
`

export const SeriesWrapper = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export const SeriesContainer = styled(motion.div)`
  display: flex;
  gap: 40px;
  padding: 25px 6%;
  width: max-content;
`

export const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 },
  },
}
