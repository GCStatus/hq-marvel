import 'nprogress/nprogress.css'
import './styles/global.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { useEffect } from 'react'

import { useTheme } from './hooks'
import { Routes } from './Routes'

function App() {
  const mode = useTheme()

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return (
    <div className={`${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <Routes />
    </div>
  )
}

export default App
