import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`

export const ComicCardContainer = styled(motion.div)`
  position: relative;
  perspective: 1500px;
  aspect-ratio: 6/9;
  cursor: pointer;
`

export const ComicCardContent = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transform-style: preserve-3d;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.4s ease;
  background: #111;
  overflow: hidden;
  will-change: transform;
`

export const ComicCover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  will-change: transform;
`

export const ComicInfo = styled(motion.p)`
  color: #ed1d24;
  font-size: 0.8rem;
  margin: 0 0 5px;
  text-transform: uppercase;
  will-change: opacity, transform;
`

export const ComicTitle = styled(motion.h3)`
  color: #f0f0f0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 15px;
  flex-grow: 1;
  will-change: opacity, transform;
`

export const CtaButton = styled(motion.button)`
  background: #ed1d24;
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(237, 29, 36, 0.7);
  align-self: flex-start;
  transition: all 0.3s ease;
  width: 100%;
  will-change: opacity, transform;

  &:hover {
    background: #fff;
    color: #ed1d24;
    box-shadow: 0 0 25px #fff;
  }
`

export const Scanline = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 3;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(237, 29, 36, 0.15) 49.9%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(237, 29, 36, 0.15) 50.1%,
    transparent 100%
  );
  opacity: 0;
  pointer-events: none;
  ${ComicCardContent}:hover & {
    opacity: 1;
    animation: ${scanline} 4s linear infinite;
  }
`

export const CardBorder = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 2px solid transparent;
  z-index: 10;
  pointer-events: none;
  transition: border-color 0.4s;
  ${ComicCardContent}:hover & {
    border-color: rgba(237, 29, 36, 0.8);
  }
`

export const DataPanel = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  padding: 20px;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(10, 10, 15, 0.95),
    rgba(10, 10, 15, 0.8)
  );
  backdrop-filter: blur(5px);
  will-change: opacity, transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateZ(40px);
`

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 15, stiffness: 80 },
  },
}

export const coverVariants: Variants = {
  rest: { y: '0%' },
  hover: { y: '-40%' },
}

export const dataItemVariants: Variants = {
  rest: { opacity: 0, y: 15 },
  hover: { opacity: 1, y: 0 },
}

export const dataPanelVariants: Variants = {
  rest: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delay: 0.1,
    },
  },
}
