import { ReactNode } from 'react'

import { ContentContainer } from './Container.styles'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <ContentContainer>{children}</ContentContainer>
}

export default Container
