import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const DetailWrapper = styled.div`
  background-color: #0a0a0a;
  color: #fff;
  overflow-x: hidden;
`

export const HeroSection = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroBackground = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transform: scale(1.1);
  will-change: transform, filter;
`

export const HeroGraphicOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #0a0a0a;

  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 10px 10px;

  clip-path: polygon(45% 0, 100% 0, 100% 100%, 25% 100%);

  @media (max-width: 768px) {
    clip-path: polygon(0% 60%, 100% 40%, 100% 100%, 0% 100%);
  }
`

export const HeroContent = styled(motion.div)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const HeroImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  justify-self: center;
  border-radius: 12px;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  will-change: transform, opacity;
`

export const HeroInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const HeroTitle = styled.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
  color: #fff;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`

export const HeroStats = styled.div`
  display: flex;
  gap: 25px;
  font-size: 1.1rem;
  color: #c0c0c0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const HeroStatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #ed1d24;
  }
`

export const ContentBody = styled.main`
  position: relative;
  z-index: 2;
  padding: 60px 40px;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const ContentGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const MainContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: sticky;
  top: 40px;
`

export const Section = styled(motion.section)``

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

export const Synopsis = styled.div`
  color: #c0c0c0;
  line-height: 1.8;
  font-size: 1.1rem;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
`

export const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;

  a {
    text-decoration: none;
  }
`

export const ComicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
`

export const ComicItem = styled.div`
  transition: transform 0.3s ease;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`

export const ComicCover = styled.div<{ $bg: string }>`
  aspect-ratio: 2 / 3;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`

export const ComicTitle = styled.h4`
  color: #c0c0c0;
  font-size: 0.9rem;
  margin-top: 10px;
  font-weight: 500;
  line-height: 1.3;
`

export const ResourceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Tag = styled.div`
  background: rgba(237, 29, 36, 0.2);
  border: 1px solid rgba(237, 29, 36, 0.5);
  color: #ed1d24;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  will-change: background-color, color;

  &:hover {
    background: #ed1d24;
    color: #fff;
  }
`

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 150px 20px;
  min-height: 100vh;
  color: #fff;

  h2 {
    font-size: 2rem;
    color: #ed1d24;
  }

  p {
    font-size: 1.2rem;
    color: #b0b0b0;
    max-width: 400px;
    margin: 10px auto 0 auto;
  }
`

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}
