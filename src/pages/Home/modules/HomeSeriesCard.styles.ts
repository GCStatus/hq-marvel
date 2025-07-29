import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const datastream = keyframes`
  0% { transform: translateY(-100%) translateX(-50%); }
  100% { transform: translateY(100%) translateX(-50%); }
`

export const YearBadge = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 0, 0, 0.85);
  color: #fff;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  z-index: 4;
  backdrop-filter: blur(4px);
`

export const SeriesFile = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 500px;
  flex-shrink: 0;
  will-change: opacity, transform;
`

export const SeriesFileContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.8);
  background: #101010;
  border: 2px solid rgba(255, 0, 0, 0.3);
  will-change: transform, box-shadow;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 250%;
    height: 120%;
    background: linear-gradient(
      transparent,
      rgba(255, 0, 0, 0.15),
      transparent
    );
    animation: ${datastream} 7s linear infinite;
    transition: opacity 0.6s;
    opacity: var(--datastream-opacity, 0);
  }
`

export const SeriesFileCover = styled(motion.div)`
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

export const SeriesFileOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 15%,
    transparent 65%
  );
  border-radius: 12px;
`

export const SeriesInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  z-index: 3;
`

export const SeriesFileTitle = styled(motion.h3)`
  color: #ffffff;
  font-size: 1.8rem;
  line-height: 1.4;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 3px 10px #000;
`

export const fileVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 120 },
  },
}

export const contentVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 20px 35px rgba(0, 0, 0, 0.8)',
    '--datastream-opacity': 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -15,
    boxShadow: '0 0 50px rgba(255, 0, 0, 0.6)',
    '--datastream-opacity': 1,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
}
