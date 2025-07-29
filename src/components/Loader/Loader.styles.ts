import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LogoWrapper = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
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
  stroke-width: 2.5;
  filter: drop-shadow(0 0 5px #fff);
`

export const LogoText = styled(motion.path)`
  fill: #ffffff;
`

export const Shimmer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-150%) skewX(-30deg);
`
