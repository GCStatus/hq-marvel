import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Hexagon, HexagonSubtitle, HexagonTitle } from './Hexagon.styles'

interface HexagonComponentProps {
  url?: string
  title: string
  subtitle?: string
}

function HexagonComponent({
  url,
  title,
  subtitle,
}: HexagonComponentProps) {
  const HexagonInner = (
    <Hexagon>
      <HexagonTitle>{title}</HexagonTitle>
      {subtitle && <HexagonSubtitle>{subtitle}</HexagonSubtitle>}
    </Hexagon>
  )

  return url ? (
    <Link to={url} style={{ textDecoration: 'none' }}>
      {HexagonInner}
    </Link>
  ) : (
    HexagonInner
  )
}

export default memo(HexagonComponent)
