import { AnimatePresence, Variants } from 'framer-motion'
import NProgress from 'nprogress'
import { memo, useEffect, useMemo, useState } from 'react'

import {
  Char,
  LoaderContainer,
  LogoContainer,
  LogoFill,
  LogoOutline,
  LogoText,
  MarvelLogoSvg,
  TextContainer,
  WebContainer,
  WebStrand,
} from './LoadingScreen.styles'

export const SvgGlowFilter = () => (
  <defs>
    <filter id="web-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />

        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
)

const MARVEL_LOGO_PATH =
  'M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201z M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z'

const MemoizedWebContainer = memo(function WebContainerComponent() {
  const webPaths = useMemo(() => {
    const paths = []
    const width = window.innerWidth
    const height = window.innerHeight
    const center = { x: width / 2, y: height / 2 }
    const numRadials = 12
    const numSpirals = 8
    const maxRadius = Math.hypot(width / 2, height / 2) * 1.2
    const radialPoints = []
    for (let i = 0; i < numRadials; i++) {
      const angle = (i / numRadials) * 2 * Math.PI
      const endX = center.x + maxRadius * Math.cos(angle)
      const endY = center.y + maxRadius * Math.sin(angle)
      paths.push({
        d: `M ${center.x},${center.y} L ${endX},${endY}`,
        strokeWidth: 1.5,
        delay: 0,
      })
      const pointsAtLevels = []
      for (let j = 1; j <= numSpirals; j++) {
        const spiralRadius = (j / numSpirals) * maxRadius
        pointsAtLevels.push({
          x: center.x + spiralRadius * Math.cos(angle),
          y: center.y + spiralRadius * Math.sin(angle),
        })
      }
      radialPoints.push(pointsAtLevels)
    }
    for (let j = 0; j < numSpirals; j++) {
      let spiralPath = ''
      for (let i = 0; i < numRadials; i++) {
        const p1 = radialPoints[i][j]
        const p2 = radialPoints[(i + 1) % numRadials][j]
        const midX = (p1.x + p2.x) / 2
        const midY = (p1.y + p2.y) / 2
        const sagFactor = 1.05
        const controlX = center.x + (midX - center.x) * sagFactor
        const controlY = center.y + (midY - center.y) * sagFactor
        if (i === 0) {
          spiralPath += `M ${p1.x} ${p1.y} `
        }
        spiralPath += `Q ${controlX} ${controlY} ${p2.x} ${p2.y} `
      }
      paths.push({
        d: spiralPath,
        strokeWidth: 1,
        delay: 0.5 + j * 0.15,
      })
    }
    return paths
  }, [])

  return (
    <WebContainer>
      <SvgGlowFilter />
      {webPaths.map(({ d, strokeWidth, delay }, index) => (
        <WebStrand
          key={index}
          d={d}
          strokeWidth={strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: { delay, duration: 1.2, ease: 'easeOut' },
          }}
        />
      ))}
    </WebContainer>
  )
})
MemoizedWebContainer.displayName = 'MemoizedWebContainer'

function LoadingScreen() {
  const { charVariants, fullText } = useMemo(() => {
    const charVariants: Variants = {
      hidden: { y: -60, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          y: {
            type: 'spring',
            stiffness: 250,
            damping: 18,
            delay: i * 0.03,
          },
          color: { duration: 0.2 },
        },
      }),
      glitch: {
        color: ['#ffffff', '#ed1d24', '#ffffff'],
        transition: { duration: 0.2, ease: 'easeInOut' },
      },
    }
    const fullText = 'Loading Marvel Universe...'.split('')
    return { charVariants, fullText }
  }, [])

  const [displayText, setDisplayText] = useState<string[]>([' '])
  const [isSequenceComplete, setSequenceComplete] =
    useState<boolean>(false)

  useEffect(() => {
    NProgress.start()

    let glitchTimer: NodeJS.Timeout

    const glitchEffect = () => {
      const glitched = fullText.map((char) =>
        char !== ' ' && Math.random() < 0.1
          ? Math.random() < 0.5
            ? '0'
            : '1'
          : char,
      )
      setDisplayText(glitched)

      setTimeout(() => {
        setDisplayText(fullText)
      }, 150)

      glitchTimer = setTimeout(glitchEffect, 2500 + Math.random() * 1000)
    }

    const sequenceTimer = setTimeout(() => {
      setSequenceComplete(true)

      glitchTimer = setTimeout(glitchEffect, 2000)
      NProgress.done()
    }, 4000)

    return () => {
      clearTimeout(glitchTimer)
      clearTimeout(sequenceTimer)
      if (NProgress.isStarted()) {
        NProgress.done()
      }
    }
  }, [fullText])

  return (
    <LoaderContainer
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}>
      <MemoizedWebContainer />
      <LogoContainer>
        <MarvelLogoSvg viewBox="-215.19 -86.608 1000 402.473">
          <LogoFill
            x="-215.19"
            y="-86.608"
            width="1000"
            height="402.473"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: [0.7, 0, 0.3, 1] }}
          />
          <LogoOutline
            d={MARVEL_LOGO_PATH}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
          />
          <LogoText
            d={MARVEL_LOGO_PATH}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          />
        </MarvelLogoSvg>
      </LogoContainer>
      <AnimatePresence>
        {isSequenceComplete && (
          <TextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {displayText.map((char, index) => (
              <Char
                key={index}
                custom={index}
                variants={charVariants}
                initial="hidden"
                animate={
                  displayText[index] !== fullText[index]
                    ? 'glitch'
                    : 'visible'
                }>
                {char}
              </Char>
            ))}
          </TextContainer>
        )}
      </AnimatePresence>
    </LoaderContainer>
  )
}

export default LoadingScreen
