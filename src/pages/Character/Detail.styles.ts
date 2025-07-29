import { motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const kenBurns = keyframes`
  0% { transform: scale(1.1) translate(2%, -1%); }
  100% { transform: scale(1) translate(0, 0); }
`

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 40px 20px rgba(237, 29, 36, 0.2); }
  50% { box-shadow: 0 0 60px 30px rgba(237, 29, 36, 0.35); }
`

const gridPan = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`

const revealShard = keyframes`
  from { transform: translateX(-100%) skewX(-20deg); }
  to { transform: translateX(0) skewX(-20deg); }
`

export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: 'beforeChildren' },
  },
  exit: { opacity: 0 },
}

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.6 } },
}

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export const nameContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    x: -20,
    scale: 2,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
    },
  },
}

export const DetailWrapper = styled(motion.div)`
  min-height: 100vh;
  overflow-x: hidden;
`

export const HeroSection = styled.div`
  position: relative;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  overflow: hidden;
`

export const HeroImage = styled.div<{ $bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center 20%;
  z-index: 1;
  animation: ${kenBurns} 30s ease-out infinite alternate;
  will-change: transform;
`

export const HeroVignette = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background:
    linear-gradient(
      to top,
      #151515 10%,
      rgba(21, 21, 21, 0.7) 35%,
      transparent 60%
    ),
    radial-gradient(ellipse at center, transparent 40%, #151515 100%);
`

export const HeroGridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(237, 29, 36, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237, 29, 36, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 3;
  mask-image: radial-gradient(
    ellipse at center,
    white 0%,
    transparent 70%
  );
  animation: ${gridPan} 40s linear infinite;
  will-change: transform, opacity;
  opacity: 0;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 4;
  perspective: 800px;
`

export const CharacterName = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.1;
  margin: 0;

  span {
    display: inline-block;
    position: relative;
    text-shadow:
      0 0 2.5px #fff,
      0 0 5px #fff,
      0 0 10px #ed1d24,
      0 0 15px #ed1d24;
    will-change: transform, opacity;
  }
`

export const LastModified = styled.p`
  color: #b0b0b0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 25px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.8;
`

export const ContentGrid = styled.div`
  max-width: 1400px;
  margin: 60px auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Sidebar = styled(MainContent)``

export const Section = styled(motion.section)`
  position: relative;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 30px;
  background-color: #1a1a1a;
  background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png');
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;
  will-change: transform;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.4s ease-out;
    pointer-events: none;
    will-change: border-color, box-shadow;
  }

  &:hover {
    transform: translateY(-5px);
    &::before {
      border-color: rgba(237, 29, 36, 0.5);
      animation: ${pulseGlow} 2s infinite;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  letter-spacing: 1.5px;
  padding-bottom: 15px;
  border-bottom: 2px solid #333;

  svg {
    color: #ed1d24;
    filter: drop-shadow(0 0 8px rgba(237, 29, 36, 0.8));
    transition: transform 0.3s ease;
    will-change: transform;
  }

  ${Section}:hover & svg {
    transform: scale(1.1);
  }
`

export const DescriptionSection = styled(motion.section)`
  position: relative;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 30px;
  background-color: #1a1a1a;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c0c0c0;
`

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ListItem = styled(motion.li)`
  color: #b0b0b0;
  font-size: 1rem;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-decoration: none;
  will-change: color, background-color, transform;

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 12px 15px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background-color: #ed1d24;
    box-shadow: 0 0 10px #ed1d24;
    transform: translateX(-100%) skewX(-20deg);
    transition: transform 0.4s ease-in-out;
    will-change: transform;
  }

  &:hover {
    color: #ffffff;
    background-color: rgba(237, 29, 36, 0.1);
    transform: translateX(10px);
    &::before {
      animation: ${revealShard} 0.5s forwards ease-out;
    }
  }
`

export const ResourceLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

export const UrlPill = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.3s ease;
  padding: 10px 20px;
  background-color: #ed1d24;
  color: #ffffff;
  text-transform: capitalize;
  box-shadow: 0 4px 20px -5px rgba(237, 29, 36, 0.7);
  border: 1px solid #ed1d24;
  clip-path: polygon(95% 0, 100% 25%, 100% 100%, 0 100%, 0 0);
  will-change: transform, color, background-color, box-shadow;

  &:hover {
    background-color: #ffffff;
    color: #ed1d24;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px -5px rgba(237, 29, 36, 1);
  }
`

export const ResourceLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #b0b0b0;
  padding: 6px 0;
  position: relative;
  will-change: color;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ed1d24;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: transform;
  }

  &:hover {
    color: #ed1d24;
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
