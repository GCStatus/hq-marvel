import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const DetailWrapper = styled.div`
  background-color: #0a0a0a;
  position: relative;
  z-index: 1;
`

export const ParallaxBackground = styled.div<{ $bg: string }>`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.2) blur(12px);
  transform: scale(1.1);
  will-change: transform, filter;
`

export const HeroSection = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  padding: 20px;
`

export const HeroCover = styled(motion.img)`
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.1);
  will-change: transform, opacity;
`

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0;
  max-width: 800px;
  text-shadow: 0 4px 20px #000;
`

export const ContentBody = styled.main`
  position: relative;
  z-index: 2;
  padding: 60px 40px;
  margin-top: -10vh;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const ContentGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 50px;
  background-color: rgba(16, 16, 18, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 20px;
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
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
`

export const TextObjectWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  border-left: 3px solid #ed1d24;
`

export const TextObjectType = styled.h3`
  text-transform: uppercase;
  color: #ed1d24;
  font-size: 1rem;
  margin: 0 0 10px 0;
`

export const TextObjectContent = styled(Synopsis)`
  padding: 0;
  background-color: transparent;
  font-size: 1rem;
  line-height: 1.7;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const ActionButton = styled.a<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) =>
    props.$primary ? '#ed1d24' : 'rgba(255, 255, 255, 0.05)'};
  color: #fff;
  border: 1px solid
    ${(props) =>
      props.$primary ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;
  will-change: transform, background-color;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) =>
      props.$primary ? '#ff3c42' : 'rgba(255, 255, 255, 0.1)'};
  }
`

export const DataGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 12px 15px;
  border-radius: 6px;

  svg {
    color: #ed1d24;
    margin-right: 15px;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`

export const DataLabel = styled.span`
  color: #a0a0a0;
  margin-right: auto;
`

export const DataValue = styled.span`
  font-weight: 500;
  color: #fff;
  text-align: right;
`

export const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;

  a {
    text-decoration: none;
  }
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`

export const GalleryItem = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    will-change: transform;
  }

  &:hover img {
    transform: scale(1.1);
  }
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
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  will-change: transform, background-color, box-shadow;

  &:hover {
    background: #ed1d24;
    color: #fff;
    box-shadow:
      0 0 10px rgba(237, 29, 36, 0.7),
      0 0 20px rgba(237, 29, 36, 0.5);
    transform: scale(1.05);
    border-color: transparent;
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
