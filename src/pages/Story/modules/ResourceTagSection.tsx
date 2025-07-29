import { motion } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import { getResourceId } from '@/utils'

import {
  itemVariants,
  ResourceTags,
  Section,
  SectionCount,
  SectionTitle,
  Tag,
} from '../Detail.styles'

interface ResourceItem {
  name: string
  resourceURI: string
}

interface ResourceTagSectionProps {
  title: string
  count: number
  items: ResourceItem[]
  basePath: 'comics' | 'series'
}

const MemoizedTag = memo(function TagComponent({
  item,
  basePath,
}: {
  item: ResourceItem
  basePath: string
}) {
  return (
    <Link to={`/${basePath}/${getResourceId(item.resourceURI)}`}>
      <Tag>{item.name}</Tag>
    </Link>
  )
})

function TagSectionComponent({
  title,
  count,
  items,
  basePath,
}: ResourceTagSectionProps) {
  if (count === 0) {
    return null
  }

  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        {title} <SectionCount>{count}</SectionCount>
      </SectionTitle>
      <ResourceTags>
        {items.map((item) => (
          <MemoizedTag
            key={item.resourceURI}
            item={item}
            basePath={basePath}
          />
        ))}
      </ResourceTags>
    </Section>
  )
}

export default memo(TagSectionComponent)
