import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  Variants,
} from 'framer-motion'
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled(motion.header)<{
  isScrolled: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 80px;
  transition:
    background-color 0.4s ease-in-out,
    backdrop-filter 0.4s ease-in-out,
    border-bottom-color 0.4s ease-in-out;
  background: rgb(18, 18, 18, 0.97);
  border-bottom: 1px solid transparent;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      background-color: rgba(18, 18, 18, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `}

  .hamburger-wrapper {
    display: none;
    z-index: 1001;

    @media (max-width: 1024px) {
      display: block;
    }
  }
`

export const LogoContainer = styled(motion.div)`
  flex-shrink: 0;
`

export const Logo = styled.div`
  background-color: #ed1d24;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 900;
  padding: 8px 18px;
  letter-spacing: 1px;
  user-select: none;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3c42;
  }
`

export const NavContainer = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 35px;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const NavItem = styled(motion.div)<{ $isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 28px 5px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#c0c0c0')};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`

export const DropdownIndicator = styled(motion.div)<{ isOpen?: boolean }>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid currentColor;
  margin-top: 2px;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg);
  `}
`

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ed1d24;
`

export const DropdownMenu = styled(motion.div)<{
  align?: 'center' | 'right'
}>`
  position: absolute;
  top: 100%;
  padding: 12px;
  width: 250px;
  background-color: rgba(22, 22, 22, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 8px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
  ${({ align }) =>
    align === 'right'
      ? css`
          right: 0;
          left: auto;
          transform: none;
        `
      : css`
          left: 50%;
          transform: translateX(-50%);
        `}
`

export const DropdownItem = styled(motion.a)`
  display: block;
  color: #d0d0d0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 14px 18px;
  border-radius: 6px;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background-color: #ed1d24;
    color: #ffffff;
  }
`

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 999;
`

export const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(90vw, 350px);
  background-color: #151515;
  z-index: 1000;
  padding: 120px 25px 40px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 50px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`

export const MobileNavLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MobileNavItem = styled(motion.div)<{ $isActive?: boolean }>`
  color: #e0e0e0;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #ffffff;
      background-color: rgba(237, 29, 36, 0.5);
    `}

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
  }
`

export const MobileDropdown = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 25px;
  border-left: 3px solid #ed1d24;
  margin: 10px 0 15px 12px;
`

export const MobileDropdownItem = styled(motion.a)`
  color: #b0b0b0;
  font-size: 1.1rem;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background-color: rgba(237, 29, 36, 0.25);
    color: #ffffff;
  }
`

export const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
}

export const logoVariants: Variants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 12,
    },
  },
}

export const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
}

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeIn,
      staggerChildren: 0.05,
    },
  },
}

export const mobileNavVariants: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: easeInOut,
      when: 'afterChildren',
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

export const mobileNavItemVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      ease: easeInOut,
    },
  },
}

export const stickyHeaderVariants: Variants = {
  visible: { y: 0, transition: { duration: 0.4, ease: easeInOut } },
  hidden: {
    y: '-100%',
    transition: { duration: 0.4, ease: easeInOut },
  },
}
