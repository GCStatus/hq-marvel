import {
  containerVariants,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HeroTitleWrapper,
  letterVariants,
  SubtitleWrapper,
  subtitleWrapperVariants,
  Underline,
  underlineVariants,
} from './Title.styles'

interface TitleProps {
  title: string
  subtitle?: string
}

function Title({ title, subtitle }: TitleProps) {
  const subtitleDelay = title.length * 0.04 + 0.4

  return (
    <HeroSection>
      <HeroTitleWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {title.split('').map((char, index) => (
          <HeroTitle key={`${char}-${index}`} variants={letterVariants}>
            {char === ' ' ? '\u00A0' : char}
          </HeroTitle>
        ))}
      </HeroTitleWrapper>

      {subtitle && (
        <SubtitleWrapper>
          <HeroSubtitle
            variants={subtitleWrapperVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: subtitleDelay,
              duration: 0.6,
              ease: 'easeOut',
            }}>
            {subtitle}
          </HeroSubtitle>
        </SubtitleWrapper>
      )}

      <Underline
        variants={underlineVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: subtitleDelay,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </HeroSection>
  )
}

export default Title
