import { motion } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import { getResourceId } from '@/utils'

import {
  itemVariants,
  ResourceItem,
  ResourceList,
  Section,
  SectionCount,
  SectionTitle,
} from '../Detail.styles'

interface Resource {
  name: string
  resourceURI: string
}

interface SectionSectionProps {
  title: string
  count: number
  items: Resource[]
  basePath: 'comics' | 'series'
}

function SectionComponent({
  title,
  count,
  items,
  basePath,
}: SectionSectionProps) {
  if (count === 0) {
    return null
  }

  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        {title} <SectionCount>{count}</SectionCount>
      </SectionTitle>
      <ResourceList>
        {items.map((item) => (
          <Link
            to={`/${basePath}/${getResourceId(item.resourceURI)}`}
            key={item.resourceURI}
            style={{ textDecoration: 'none' }}>
            <ResourceItem>{item.name}</ResourceItem>
          </Link>
        ))}
      </ResourceList>
    </Section>
  )
}

export default memo(SectionComponent)
