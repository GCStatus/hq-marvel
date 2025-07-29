import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CharacterGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
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
  transition: all 0.3s;
  text-transform: uppercase;

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
