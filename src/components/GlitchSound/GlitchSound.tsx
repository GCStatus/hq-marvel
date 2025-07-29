import { useEffect, useMemo } from 'react'

import glitch from '@/assets/glitch.mp3'

function GlitchSound() {
  const audio = useMemo(() => new Audio(glitch), [])

  useEffect(() => {
    audio.volume = 0.4

    audio.play()
  }, [audio])

  return null
}

export default GlitchSound
