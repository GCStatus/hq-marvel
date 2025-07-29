import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { throttle } from 'lodash'
import {
  memo,
  MouseEvent,
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import type { Character } from '@/types'

import {
  BottomHUD,
  BreachBackground,
  BreachContent,
  BreachSection,
  CharacterArt,
  CharacterName,
  CharacterTitle,
  letterVariants,
  nameContainerVariants,
  NavHandler,
  NavigationSystem,
  ProgressBar,
  ProgressBarContainer,
} from './Breach.styles'

const MemoizedChevronIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}>
    <path d="M9.29,15.71L13.59,11.41L9.29,7.12L10.71,5.71L16.41,11.41L10.71,17.12L9.29,15.71Z" />
  </svg>
))

MemoizedChevronIcon.displayName = 'MemoizedChevronIconComponent'

interface BreachProps {
  shuffledCharacters: Character[]
}

function Breach({ shuffledCharacters }: BreachProps) {
  const [scope, animate] = useAnimate()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const isTransitioningRef = useRef(false)
  const rectRef = useRef<DOMRect | null>(null)

  const handleMouseMove = useMemo(
    () =>
      throttle(
        (e: MouseEvent<HTMLElement>) => {
          const el = e.currentTarget
          if (!rectRef.current || !el) return

          const rect = rectRef.current
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const offsetXAmount = rect.width * 0.05
          const offsetYAmount = rect.height * 0.05
          const adjustedX = x + offsetXAmount
          const adjustedY = y + offsetYAmount

          el.style.setProperty('--x', `${adjustedX}px`)
          el.style.setProperty('--y', `${adjustedY}px`)

          const middleX = rect.width / 2
          const middleY = rect.height / 2
          const parallaxOffsetX = (x - middleX) / middleX
          const parallaxOffsetY = (y - middleY) / middleY

          animate(
            '#character-art',
            { x: parallaxOffsetX * 25, y: parallaxOffsetY * 15 },
            { type: 'spring', stiffness: 120, damping: 20, mass: 0.7 },
          )
          animate(
            '#breach-background',
            { x: parallaxOffsetX * -10, y: parallaxOffsetY * -8 },
            { type: 'spring', stiffness: 120, damping: 20, mass: 0.7 },
          )
        },
        16,
        { leading: true, trailing: false },
      ),
    [animate],
  )

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setIsPaused(true)
    rectRef.current = e.currentTarget.getBoundingClientRect()
  }

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    setIsPaused(false)
    rectRef.current = null
    animate('#character-art', { x: 0, y: 0 })
    animate('#breach-background', { x: 0, y: 0 })
    e.currentTarget.style.setProperty('--x', '50%')
    e.currentTarget.style.setProperty('--y', '50%')
  }

  const navigate = useCallback(
    async (direction: 'next' | 'prev') => {
      if (isTransitioningRef.current || !shuffledCharacters.length) return
      isTransitioningRef.current = true

      const total = shuffledCharacters.length
      const nextIndex =
        direction === 'next'
          ? (activeIndex + 1) % total
          : (activeIndex - 1 + total) % total

      await animate(
        '#character-art',
        {
          opacity: 0,
          filter: 'blur(15px) saturate(0)',
          clipPath: [
            'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            'polygon(50% -20%, 120% 25%, 120% 75%, 50% 120%, -20% 75%, -20% 25%)',
          ],
        },
        { duration: 1, ease: 'easeInOut' },
      )

      setActiveIndex(nextIndex)
      isTransitioningRef.current = false
    },
    [activeIndex, shuffledCharacters, animate],
  )

  useEffect(() => {
    if (isPaused) return
    const timer = setTimeout(() => navigate('next'), 10000)
    return () => clearTimeout(timer)
  }, [activeIndex, isPaused, navigate])

  useEffect(() => {
    if (shuffledCharacters.length > 1) {
      const total = shuffledCharacters.length
      const nextChar = shuffledCharacters[(activeIndex + 1) % total]
      if (nextChar)
        new Image().src = `${nextChar.thumbnail.path}.${nextChar.thumbnail.extension}`
      const prevChar =
        shuffledCharacters[(activeIndex - 1 + total) % total]
      if (prevChar)
        new Image().src = `${prevChar.thumbnail.path}.${prevChar.thumbnail.extension}`
    }
  }, [activeIndex, shuffledCharacters])

  const character = shuffledCharacters[activeIndex]

  return (
    <BreachSection
      ref={scope}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <AnimatePresence mode="wait">
        {character && (
          <BreachBackground
            id="breach-background"
            key={`${character.id}-bg`}
            style={{
              backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {character && (
          <CharacterArt
            id="character-art"
            key={character.id}
            style={{
              backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
            }}
            initial={{
              opacity: 0,
              filter: 'blur(25px) saturate(0)',
              clipPath:
                'polygon(50% 120%, 120% 75%, 120% 25%, 50% -20%, -20% 25%, -20% 75%)',
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px) saturate(1)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
          />
        )}
      </AnimatePresence>

      <BreachContent>
        <AnimatePresence mode="wait">
          {character && (
            <motion.div
              key={`${character.id}-content`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.8 },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.4 },
              }}>
              <CharacterName
                variants={nameContainerVariants}
                initial="hidden"
                animate="visible"
                href={`/characters/${character.id}`}>
                {character.name.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </CharacterName>

              <CharacterTitle>
                {character.description ||
                  'A pivotal force in the eternal battle for the cosmos.'}
              </CharacterTitle>
            </motion.div>
          )}
        </AnimatePresence>
      </BreachContent>

      <NavigationSystem>
        <NavHandler
          onClick={() => navigate('prev')}
          disabled={isTransitioningRef.current}
          className="prev"
          whileTap={{ scale: 0.95 }}>
          <MemoizedChevronIcon style={{ transform: 'rotate(180deg)' }} />
        </NavHandler>

        <NavHandler
          onClick={() => navigate('next')}
          disabled={isTransitioningRef.current}
          className="next"
          whileTap={{ scale: 0.95 }}>
          <MemoizedChevronIcon />
        </NavHandler>
      </NavigationSystem>

      <BottomHUD>
        <ProgressBarContainer>
          {!isPaused && (
            <ProgressBar
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 10, ease: 'linear' }}
            />
          )}
        </ProgressBarContainer>
      </BottomHUD>
    </BreachSection>
  )
}

export default Breach
