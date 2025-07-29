import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const EventCardContainer = styled(motion.div)`
  aspect-ratio: 2 / 3;
  perspective: 1500px;
  -webkit-tap-highlight-color: transparent;
`

export const CardContent = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  will-change: transform;
`

export const CardImage = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  transform: translateZ(0);
  filter: grayscale(30%) brightness(0.9);
  transition:
    filter 0.5s ease-out,
    transform 0.5s ease-out;
  will-change: filter, transform;

  ${EventCardContainer}:hover & {
    filter: grayscale(0%) brightness(1.1) saturate(1.2);
    transform: scale(1.08) translateZ(0);
  }
`

export const CardGlare = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(20px);
  background: linear-gradient(
    130deg,
    transparent 40%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 60%
  );
  background-size: 300% 100%;
  background-position: 150% 0;
  transition:
    background-position 0.8s ease-in-out,
    opacity 0.8s ease-in-out;
  mix-blend-mode: hard-light;
  opacity: 0;
  will-change: background-position, opacity;

  ${EventCardContainer}:hover & {
    background-position: -50% 0;
    opacity: 1;
  }
`

export const CardTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  transform: translateZ(60px);
  color: #fff;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 15%,
    transparent 70%
  );
`

export const CardDate = styled(motion.p)`
  font-size: 1rem;
  font-weight: 700;
  color: #ed1d24;
  margin: 0 0 5px 0;
  will-change: transform, opacity;
`

export const CardTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.8);
  will-change: transform, opacity;
`

export const contentVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}
