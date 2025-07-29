import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const CreatorCardContainer = styled(motion.div)`
  --mouse-x: 50%;
  --mouse-y: 50%;
  aspect-ratio: 4 / 5;
  position: relative;
  border-radius: 12px;
  background-color: #1c1c1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
  overflow: hidden;
  z-index: 1;
  will-change: transform, border-color;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: radial-gradient(
      350px circle at var(--mouse-x) var(--mouse-y),
      rgba(237, 29, 36, 0.4),
      transparent 80%
    );
    opacity: 0;
    transition: opacity 0.4s ease-out;
    z-index: 1;
    will-change: opacity;
  }

  &:hover {
    transform: scale(1.04);
    border-color: rgba(237, 29, 36, 0.4);
    z-index: 10;
  }

  &:hover::before {
    opacity: 1;
  }
`

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

export const CardImage = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  filter: grayscale(80%) brightness(0.9);
  transition:
    filter 0.4s ease-in-out,
    transform 0.4s ease-in-out;
  will-change: filter, transform;

  ${CreatorCardContainer}:hover & {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.05);
  }
`

export const CardGlare = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 40%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 60%
  );
  background-size: 250% 100%;
  background-position: 150% 0;
  opacity: 0;
  mix-blend-mode: color-dodge;
  transition:
    background-position 0.6s ease-out,
    opacity 0.6s ease-out;
  z-index: 2;
  will-change: background-position, opacity;

  ${CreatorCardContainer}:hover & {
    background-position: -50% 0;
    opacity: 0.8;
  }
`

export const CardTextWrapper = styled.div`
  position: absolute;
  inset: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 3;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.9) 10%,
    rgba(10, 10, 10, 0.6) 30%,
    transparent 60%
  );
`

export const CardName = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  margin: 0 0 15px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  transition: color 0.3s ease;
  will-change: color;

  ${CreatorCardContainer}:hover & {
    color: #ed1d24;
  }
`

export const CardStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.4s ease-out 0.1s,
    transform 0.4s ease-out 0.1s;
  will-change: opacity, transform;

  ${CreatorCardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #d0d0d0;

  svg {
    color: #ed1d24;
    flex-shrink: 0;
  }

  span {
    font-weight: 700;
    color: #fff;
    font-size: 1.1rem;
    margin-right: 4px;
  }
`

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
}
