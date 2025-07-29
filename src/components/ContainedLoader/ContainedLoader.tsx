import { Loader } from '..'
import { LoaderContainer } from './ContainedLoader.styles'

interface ContainedLoaderProps {
  size?: number | string
  animate?: boolean
}

function ContainedLoader(props: ContainedLoaderProps) {
  return (
    <LoaderContainer>
      <Loader {...props} />
    </LoaderContainer>
  )
}

export default ContainedLoader
