import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const HeroSection = styled.section`
  text-align: center;
  padding: 60px 0;
  border-bottom: 1px solid #2a2a2a;
  margin-bottom: 40px;
`

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 4.5rem);
  text-transform: uppercase;
  color: #ed1d24;
  text-shadow: 0 0 15px rgba(237, 29, 36, 0.7);
  margin: 0 0 10px 0;
  letter-spacing: 2px;
`

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

export const LoadMoreButton = styled.button`
  display: block;
  margin: 50px auto 0 auto;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background-color: #ed1d24;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover:not(:disabled) {
    background-color: #fff;
    color: #ed1d24;
    transform: scale(1.05);
  }
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`

export const filtersVariants: Variants = {
  hidden: { opacity: 0, height: 0, y: -20 },
  visible: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export const CreatorGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`
