import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const Section = styled(motion.div)``

export const SectionTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #fff;
  position: relative;
  padding-left: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    bottom: 5px;
    width: 4px;
    background-color: #ed1d24;
    border-radius: 2px;
  }
`
export const SectionCount = styled.span`
  font-size: 1rem;
  background-color: rgba(237, 29, 36, 0.3);
  color: #fff;
  padding: 2px 8px;
  border-radius: 6px;
`

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}
