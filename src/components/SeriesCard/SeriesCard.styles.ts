import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const SeriesCardContainer = styled(motion.div)`
  --mouse-x: 50%;
  --mouse-y: 50%;
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 12px;
  background: #1a1a1a;
  transition: transform 0.2s ease-out;
  z-index: 1;
  will-change: transform;

  &:hover {
    transform: scale(1.03);
    z-index: 10;
  }
`

export const CardGlow = styled.div`
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(237, 29, 36, 0.5),
    transparent 80%
  );
  opacity: 0;
  transition: opacity 0.3s ease-out;
  z-index: -2;
  will-change: opacity;
  ${SeriesCardContainer}:hover & {
    opacity: 1;
  }
`

export const CardBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;
  z-index: 2;
  will-change: border-color;
  ${SeriesCardContainer}:hover & {
    border-color: rgba(237, 29, 36, 0.5);
  }
`

export const CardContent = styled.div`
  position: absolute;
  inset: 1px;
  border-radius: 11px;
  background: #000;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(45deg, #161618 25%, transparent 25%),
      linear-gradient(-45deg, #161618 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #161618 75%),
      linear-gradient(-45deg, transparent 75%, #161618 75%);
    background-size: 20px 20px;
    background-position:
      0 0,
      0 10px,
      10px -10px,
      -10px 0px;
    opacity: 0.3;
  }
`

export const BannerImage = styled(motion.div)<{ $bg: string }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, filter;

  ${SeriesCardContainer}:hover & {
    filter: saturate(1.2);
  }
`

export const BannerInfo = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px;
  background: linear-gradient(
    90deg,
    rgba(10, 10, 10, 1) 20%,
    rgba(10, 10, 10, 0.7) 50%,
    transparent 70%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BannerTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  margin: 0;
  max-width: 90%;
`

export const BannerYears = styled.p`
  font-size: 1.1rem;
  color: #c0c0c0;
  margin-bottom: 10px;
  border-left: 3px solid #ed1d24;
  padding-left: 10px;
`

export const BannerStats = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.4s ease 0.1s,
    transform 0.4s ease 0.1s;
  will-change: opacity, transform;

  ${SeriesCardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

export const StatItem = styled.div`
  font-size: 0.9rem;
  color: #c0c0c0;
  text-transform: uppercase;
  strong {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-right: 5px;
  }
`

export const ViewSeriesButton = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color: #fff;

  svg {
    transition: transform 0.3s ease;
  }
  ${SeriesCardContainer}:hover & svg {
    transform: translateX(5px);
  }
`

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}
