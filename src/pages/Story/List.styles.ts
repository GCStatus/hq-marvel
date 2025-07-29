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

export const StoryList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
`

export const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}
