import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const StoryRowContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-left: 4px solid transparent;
  will-change: transform, border-color;
`

export const RowShine = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    95deg,
    transparent 45%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 55%
  );
  transform: translateX(-101%) skewX(-25deg);
  will-change: transform;
`

export const RowContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  align-items: center;
  gap: 30px;
  padding: 20px 25px;
  background-color: #1a1a1a;
  color: #c0c0c0;
  transition: color 0.2s ease-in-out;
  will-change: background-color, color;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 15px 20px;
  }
`

export const RowInfo = styled.div``

export const RowTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #fff;
`

export const RowType = styled.p`
  font-size: 0.9rem;
  text-transform: capitalize;
  color: #888;
  margin: 0;
`

export const RowStats = styled.div`
  display: flex;
  gap: 25px;
  font-size: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`

export const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #ed1d24;
  }

  strong {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-right: 5px;
  }
`

export const ViewDossier = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color: #888;
  will-change: opacity, transform, color;

  svg {
    transition: transform 0.3s ease;
    will-change: transform;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
    margin-top: 10px;
    display: flex;
  }
`

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

export const rowVariants: Variants = {
  rest: {
    backgroundColor: '#1a1a1a',
    color: '#c0c0c0',
    borderColor: 'transparent',
    x: 0,
  },
  hover: {
    backgroundColor: '#222',
    color: '#fff',
    borderColor: '#ed1d24',
    x: 5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export const shineVariants: Variants = {
  rest: { x: '-101%' },
  hover: {
    x: '101%',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const dossierVariants: Variants = {
  rest: { opacity: 0, x: -10 },
  hover: {
    opacity: 1,
    x: 0,
    color: '#fff',
    transition: { type: 'spring', duration: 0.3, delay: 0.1 },
  },
}
