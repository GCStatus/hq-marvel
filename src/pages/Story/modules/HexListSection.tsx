import { motion } from 'framer-motion'
import { memo } from 'react'

import { Hexagon } from '@/components'
import { getResourceId } from '@/utils'

import {
  HexGrid,
  itemVariants,
  Section,
  SectionCount,
  SectionTitle,
} from '../Detail.styles'

interface HexItem {
  name: string
  resourceURI: string
}

interface HexListSectionProps {
  title: string
  count: number
  items: HexItem[]
  basePath: 'characters' | 'creators'
}

function HexListComponent({
  title,
  count,
  items,
  basePath,
}: HexListSectionProps) {
  if (count === 0) {
    return null
  }

  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        {title} <SectionCount>{count}</SectionCount>
      </SectionTitle>
      <HexGrid>
        {items.slice(0, 12).map((item) => (
          <Hexagon
            title={item.name}
            key={item.resourceURI}
            url={`/${basePath}/${getResourceId(item.resourceURI)}`}
          />
        ))}
      </HexGrid>
    </Section>
  )
}

export default memo(HexListComponent)
