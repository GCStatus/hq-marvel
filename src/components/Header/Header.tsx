import { AnimatePresence, motion } from 'framer-motion'
import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { NAV_LINKS } from './config'
import {
  DropdownIndicator,
  DropdownItem,
  DropdownMenu,
  dropdownVariants,
  HeaderWrapper,
  Logo,
  LogoContainer,
  logoVariants,
  MobileDropdown,
  MobileDropdownItem,
  MobileNav,
  MobileNavItem,
  mobileNavItemVariants,
  MobileNavLinks,
  mobileNavVariants,
  NavContainer,
  NavItem,
  navItemVariants,
  Overlay,
  stickyHeaderVariants,
  Underline,
} from './Header.styles'

function Header() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null)

  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHidden(false)
      } else {
        setIsHidden(true)
      }
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title)
  }

  return (
    <HeaderWrapper
      variants={stickyHeaderVariants}
      animate={isHidden && !isMobileMenuOpen ? 'hidden' : 'visible'}
      isScrolled={isScrolled}
      onMouseLeave={() => setActiveItem(null)}>
      <LogoContainer as={motion.a} href="/" variants={logoVariants}>
        <Logo>MARVEL</Logo>
      </LogoContainer>

      <NavContainer>
        {NAV_LINKS.map((link, index) => {
          const isActive = link.href
            ? link.href === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.href)
            : false

          return (
            <NavItem
              key={link.title}
              as={link.href && !link.dropdown ? motion.a : motion.div}
              href={link.href}
              variants={navItemVariants}
              onMouseEnter={() => setActiveItem(link.title)}
              $isActive={isActive}>
              {link.title}
              {link.dropdown && <DropdownIndicator />}

              {(isActive || activeItem === link.title) && (
                <Underline
                  layoutId="underline"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <AnimatePresence>
                {link.dropdown && activeItem === link.title && (
                  <DropdownMenu
                    align={
                      NAV_LINKS.length - index <= 2 ? 'right' : 'center'
                    }
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden">
                    {link.dropdown.map((item) => (
                      <DropdownItem
                        key={item.title}
                        href={item.href}
                        variants={navItemVariants}>
                        {item.title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </NavItem>
          )
        })}
      </NavContainer>

      <Hamburger
        toggled={isMobileMenuOpen}
        toggle={setMobileMenuOpen}
        color="#FFFFFF"
        size={24}
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNav
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
              <MobileNavLinks>
                {NAV_LINKS.map((link) => {
                  const isActive = link.href
                    ? link.href === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.href)
                    : false

                  return (
                    <motion.div
                      key={link.title}
                      variants={mobileNavItemVariants}>
                      <MobileNavItem
                        as={link.href && !link.dropdown ? 'a' : 'div'}
                        href={link.href}
                        $isActive={isActive}
                        onClick={() => {
                          if (link.dropdown) {
                            toggleMobileDropdown(link.title)
                          } else {
                            setMobileMenuOpen(false)
                          }
                        }}>
                        {link.title}
                        {link.dropdown && (
                          <DropdownIndicator
                            isOpen={activeMobileDropdown === link.title}
                          />
                        )}
                      </MobileNavItem>
                      <AnimatePresence>
                        {link.dropdown &&
                          activeMobileDropdown === link.title && (
                            <MobileDropdown
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}>
                              {link.dropdown.map((item) => (
                                <MobileDropdownItem
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}>
                                  {item.title}
                                </MobileDropdownItem>
                              ))}
                            </MobileDropdown>
                          )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </MobileNavLinks>
            </MobileNav>
          </>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  )
}

export default Header
