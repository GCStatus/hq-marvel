import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

export const filmGrain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-1%, -2%); }
  20% { transform: translate(1%, 2%); }
  30% { transform: translate(-2%, 1%); }
  40% { transform: translate(2%, -1%); }
  50% { transform: translate(-1%, 2%); }
  60% { transform: translate(1%, -2%); }
  70% { transform: translate(-2%, -1%); }
  80% { transform: translate(2%, 2%); }
  90% { transform: translate(-1%, 1%); }
`

export const LoaderContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #ed1d24 0%,
    #000000 50%,
    #ed1d24 100%
  );
  z-index: 9999;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 50%,
      #000 100%
    );
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20%;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXVpaWl9fX1ZWVkICAgJCQkKCgpFRUVERERGRkZHR0dLS0tMTExPT09SUlJWVlZcXFxpaWltbW1NTU1SUlJWVlZXWFjJztK4AAAAEHRSTlMAACB/gDB/gFAQgCCgQDCgUGCBMAAAAApJREFUeNpiYAAODw4sLSxMDExMTCwsDAwMDIwAAAAOCwkBAIDw8DBkYGBgYWBgYGBgaWlpYmBgYGBgYWFiYmBgYGBgYMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyL+8/gA4d9Xb9b3pAAAAAElFTkSuQmCC');
    opacity: 0.03;
    animation: ${filmGrain} 0.3s steps(5, end) infinite;

    will-change: transform;
  }
`

export const WebContainer = styled.svg`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;

  overflow: visible;
`

export const WebStrand = styled(motion.path)`
  fill: none;
  stroke-linecap: round;
  stroke: #ffffff;
  
    OPTIMIZATION: Apply the highly performant SVG filter instead of the CSS one.
    This is the single biggest performance improvement.
  */
  filter: url(#web-glow);
`

export const LogoContainer = styled(motion.div)`
  width: clamp(300px, 80vw, 450px);
  z-index: 10;
`

export const MarvelLogoSvg = styled.svg`
  width: 100%;
  height: auto;
  overflow: visible;
`

export const LogoFill = styled(motion.rect)`
  fill: #ed1d24;
`

export const LogoOutline = styled(motion.path)`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  filter: drop-shadow(0 0 8px #fff);
`

export const LogoText = styled(motion.path)`
  fill: #ffffff;
`

export const TextContainer = styled(motion.div)`
  position: absolute;
  bottom: 8%;
  display: flex;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #ffffff;
  text-shadow: 0 0 12px rgba(237, 29, 36, 0.6);
  z-index: 20;
  gap: 0.1rem;
`

export const Char = styled(motion.span)`
  display: inline-block;
  white-space: pre;
  will-change: color, transform;
`
