import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #fff, 0 0 15px #ED1D24, 0 0 20px #ED1D24; }
  50% { text-shadow: 0 0 8px #fff, 0 0 12px #ED1D24; }
`

export const BreachSection = styled.section`
  height: 100vh;
  min-height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding: 100px 20px;
  background: #000;
  overflow: hidden;
`

export const BreachBackground = styled(motion.div)`
  position: absolute;
  inset: -5%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  will-change: transform, opacity;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(10, 10, 10, 0) 0%,
      rgba(0, 0, 0, 0.9) 40%,
      #000 65%
    );
    z-index: 3;
    transition: background 0.2s ease;
  }
`

export const CharacterArt = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1100px;
  height: 95%;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: 2;
  filter: drop-shadow(0 0 70px rgba(237, 29, 36, 0.5));
  mask-image: linear-gradient(to top, black 50%, transparent 100%);
  will-change: transform, opacity, filter, clip-path;
`

export const BreachContent = styled(motion.div)`
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90vw;
  margin-bottom: 18vh;
  will-change: transform, opacity;
`

export const CharacterName = styled(motion.a)`
  font-weight: 800;
  font-size: clamp(2.5rem, 9vw, 8rem);
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 1.1;
  color: #f5f5f5;
  margin: 0 0 20px;
  text-shadow:
    0 2px 5px rgba(0, 0, 0, 0.7),
    0 0 15px rgba(237, 29, 36, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  white-space: normal;
  transition: color 300ms ease;
  text-decoration: none;

  &:hover {
    color: #e24423;
  }
`

export const CharacterTitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ccc;
  animation: ${textGlow} 5s infinite ease-in-out;
  margin: 0;
  max-width: 55ch;
  line-height: 1.7;
  text-align: center;
`

export const NavigationSystem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  pointer-events: none;
`

export const NavHandler = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 200px;
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.5),
    rgba(10, 10, 10, 0)
  );
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  clip-path: polygon(0 0, 100% 20%, 100% 80%, 0% 100%);
  will-change: background, color, width, border-color, transform;

  svg {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    will-change: transform, filter;
  }

  &.prev {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(10, 10, 10, 0.5),
      rgba(10, 10, 10, 0)
    );
    clip-path: polygon(100% 0, 0 20%, 0 80%, 100% 100%);
  }

  &.next {
    right: 0;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(
      to right,
      rgba(237, 29, 36, 0.7),
      rgba(237, 29, 36, 0)
    );
    color: #fff;
    width: 110px;
    border-color: rgba(237, 29, 36, 0.8);

    svg {
      transform: scale(1.2)
        ${(props) =>
          props.className?.includes('prev') ? 'rotate(180deg)' : ''};
      filter: drop-shadow(0 0 10px #fff);
    }
  }

  &.prev:hover:not(:disabled) {
    background: linear-gradient(
      to left,
      rgba(237, 29, 36, 0.7),
      rgba(237, 29, 36, 0)
    );
  }

  &:disabled {
    color: #444;
    cursor: not-allowed;
    background: rgba(10, 10, 10, 0.3);
  }
`

export const BottomHUD = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

export const ProgressBarContainer = styled.div`
  width: 30vw;
  max-width: 400px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background: #ed1d24;
  box-shadow:
    0 0 12px #ed1d24,
    0 0 5px #ed1d24;
  border-radius: 3px;
  will-change: width;
`

export const nameContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
  },
}

export const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', damping: 10, stiffness: 150 },
  },
}
