import { motion } from 'framer-motion'
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

export const EventGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  justify-content: center;
`
