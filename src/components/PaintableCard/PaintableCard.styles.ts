import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const glitchAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(0.125rem, -0.125rem); } 
  50% { transform: translate(-0.125rem, 0.125rem); } 
  75% { transform: translate(0.125rem, 0.125rem); } 
  100% { transform: translate(0, 0); }
`

export const PaintableCard = styled(motion.div)`
  aspect-ratio: 5 / 7;
  perspective: 93.75rem;
  -webkit-tap-highlight-color: transparent;
`

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.2s linear;
  border-radius: 1.125rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.5);
  ${PaintableCard}:hover & {
    box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.8);
  }
`

export const CardImage = styled.div<{ $bg: string; $isLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.125rem;
  background-color: #2a2a2a;
  background-image: url(${(props) =>
    props.$isLoaded ? props.$bg : 'none'});
  background-size: cover;
  background-position: center;
  transform: translateZ(0);
  filter: grayscale(0%) contrast(100%) brightness(100%) sepia(0%);
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.125rem;
    background-image: inherit;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%) contrast(120%) brightness(80%) sepia(20%);
    opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;
  }

  ${PaintableCard}:hover & {
    &::after {
      opacity: 0;
    }
    animation: ${glitchAnimation} 0.3s forwards;
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1.125rem;
  overflow: hidden;
  transform: translateZ(1.25rem);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" fill="none" stroke="%23555555" stroke-width="0.3"/></svg>');
  background-size: 2.5rem;
  opacity: 0.3;
  transition: opacity 0.4s ease;

  ${PaintableCard}:hover & {
    opacity: 0.1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.9) 15%,
      transparent 60%
    );
  }
`

export const CardTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(0.75rem, 4vw, 1.25rem);
  transform: translateZ(3.75rem);
  color: #fff;
  overflow: hidden;
`

export const NameShield = styled.div`
  position: relative;
  padding: clamp(0.5rem, 2.5vw, 0.9375rem);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%);
  background: rgba(15, 15, 15, 0.7);
  backdrop-filter: blur(0.3125rem);
  transition: transform 0.4s cubic-bezier(0.2, 1, 0.2, 1);
`

export const CardName = styled.h3`
  margin: 0;
  padding-left: 10%;
  font-weight: 700;
  font-size: clamp(1.2rem, 4.5vw, 1.8rem);
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.8);
  transition: text-shadow 0.4s ease;
  ${PaintableCard}:hover & {
    text-shadow: 0 0 0.5rem rgba(237, 29, 36, 0.8);
  }
`

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.1,
    },
  },
}
