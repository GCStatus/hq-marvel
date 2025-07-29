import { easeOut, motion, Variants } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const subtleFlicker = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.95; }
  100% { opacity: 1; }
`

export const LayoutWrapper = styled(motion.div)`
  min-height: 100vh;
  padding: 140px 40px 60px 40px;
  background-color: #0a0a0a;
  background-image:
    linear-gradient(rgba(237, 29, 36, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237, 29, 36, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 120px 20px 40px 20px;
  }
`

export const LayoutHeader = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`

export const ComponentCanvas = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin-top: 20px;
  background-color: #121212;
  border: 1px solid rgba(237, 29, 36, 0.3);
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(237, 29, 36, 0.1);
  overflow: hidden;
  animation: ${subtleFlicker} 10s infinite;
  display: 'flex';
  justifycontent: 'center';
  paddingtop: 10;
  paddingbottom: 10;

  & > * {
    width: 100%;
  }
`

export const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ed1d24;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(237, 29, 36, 0.5);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: #ff3c42;
    box-shadow: 0 0 25px rgba(255, 60, 66, 0.7);

    svg {
      transform: translateX(-5px);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
    top: auto;
    left: auto;
  }
`

export const layoutVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}
