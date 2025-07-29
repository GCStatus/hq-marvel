import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const DetailWrapper = styled.div`
  background-color: #0a0a0a;
  color: #fff;
  overflow-x: hidden;
`

export const HeroSection = styled.header`
  padding: 100px 40px;
  background: #111
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="%231a1a1a"><rect x="0" y="0" width="100" height="1" /><rect x="0" y="0" width="1" height="100" /></g></svg>');
  background-size: 20px;
  border-bottom: 1px solid #333;
  text-align: center;
`

export const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ed1d24;
  letter-spacing: 2px;
  margin-bottom: 10px;
`

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`

export const ContentBody = styled.main`
  position: relative;
  z-index: 2;
  padding: 60px 40px;

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

export const OriginalIssue = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #e0e0e0;
  border: 1px solid #333;
  transition: all 0.3s ease;
  will-change: color, background-color, border-color;

  svg {
    color: #ed1d24;
    font-size: 1.5rem;
  }

  &:hover {
    color: #fff;
    border-color: #ed1d24;
    background-color: #222;
  }
`

export const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;

  a {
    text-decoration: none;
  }
`

export const ResourceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  a {
    text-decoration: none;
  }
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
export const LastModified = styled.div`
  font-size: 0.9rem;
  color: #777;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
