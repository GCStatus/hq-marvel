import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

const textFlicker = keyframes`
  0%, 100% { opacity: 1; text-shadow: 0 0 10px #ED1D24, 0 0 15px #ED1D24; }
  50% { opacity: 0.85; text-shadow: 0 0 8px #ED1D24; }
`

const glitch = keyframes`
  0% { text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f0f; clip-path: inset(10% 0 85% 0); }
  20% { text-shadow: 2px 2px 0 #0ff, -2px -2px 0 #f0f; clip-path: inset(50% 0 10% 0); }
  40% { text-shadow: -2px 2px 0 #0ff, 2px -2px 0 #f0f; clip-path: inset(90% 0 5% 0); }
  60% { text-shadow: 2px -2px 0 #0ff, -2px 2px 0 #f0f; clip-path: inset(40% 0 45% 0); }
  80% { text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f0f; clip-path: inset(5% 0 80% 0); }
  100% { text-shadow: none; clip-path: inset(0); }
`

export const SectionTitle = styled(motion.span)`
  color: #f5f5f5;
  animation: ${textFlicker} 7s infinite;
  padding: 0 3px;
`

export const LoadMoreWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export const LoadMoreButton = styled.button`
  background: none;
  border: 2px solid rgba(237, 29, 36, 0.7);
  color: rgba(237, 29, 36, 0.9);
  font-size: 1.2rem;
  padding: 15px 30px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  span {
    position: relative;
    z-index: 2;
  }

  &:hover span {
    color: #fff;
    animation: ${glitch} 0.3s linear;
  }

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #050508;
    color: #fff;
    clip-path: inset(50% 0 50% 0);
    transition: clip-path 0.3s;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::after {
    clip-path: inset(80% 0 0 0);
  }

  &:hover::before,
  &:hover::after {
    clip-path: inset(0);
  }
`

export const MissionBriefingsSection = styled(motion.section)`
  background-color: #000000;
  position: relative;
  overflow: hidden;
  border-top: 2px solid rgba(255, 0, 0, 0.5);
`
