import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const HeroSection = styled.section<{ $bg: string }>`
  position: relative;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1a1a1a;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.5);
    transform: scale(1.1);
    z-index: 0;
  }
`

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  z-index: 1;
`

export const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ed1d24;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(237, 29, 36, 0.5);
  will-change: transform, opacity;
`

export const HeroName = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`

export const ContentBody = styled.main`
  padding: 60px 40px;
  background-color: #111;
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
  gap: 40px;
`

export const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: sticky;
  top: 40px;
`

export const Section = styled(motion.section)`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 25px;
  border: 1px solid #2a2a2a;
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionCount = styled.span`
  font-size: 0.9rem;
  background-color: #ed1d24;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 6px;
  background-color: #2a2a2a;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  will-change: background-color, transform;
  &:hover {
    background-color: #ed1d24;
    transform: translateY(-2px);
  }
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;

  svg {
    font-size: 2rem;
    color: #ed1d24;
    margin-bottom: 10px;
  }
`

export const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
`

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #a0a0a0;
  text-transform: uppercase;
`

export const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ResourceItem = styled.div`
  padding: 15px;
  background-color: #222;
  border-radius: 6px;
  color: #c0c0c0;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  will-change: color, background-color, border-color;
  &:hover {
    background-color: #2a2a2a;
    color: #fff;
    border-left-color: #ed1d24;
  }
`

export const ResourceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Tag = styled.div`
  background: rgba(237, 29, 36, 0.2);
  color: #ed1d24;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
`

export const LastModified = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.8rem;
  text-align: center;
  justify-content: center;
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
