import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

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

export const SeriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
