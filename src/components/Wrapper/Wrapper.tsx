import { ReactNode } from 'react'

import { Footer, Header } from '..'
import { AppWrapper, MainContent } from './Wrapper.styles'

interface WrapperProps {
  children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return (
    <AppWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </AppWrapper>
  )
}

export default Wrapper
