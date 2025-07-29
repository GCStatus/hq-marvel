import { motion } from 'framer-motion'
import { memo } from 'react'
import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

import { getResourceId } from '@/utils'

import {
  itemVariants,
  ListItem,
  Section,
  SectionTitle,
  StyledList,
} from '../Detail.styles'

interface ResourceItem {
  name: string
  resourceURI: string
}

interface SectionProps {
  title: string
  items: ResourceItem[]
  Icon: IconType
  basePath: 'comics' | 'series' | 'events' | 'stories'
}

function SectionComponent({ title, items, Icon, basePath }: SectionProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariants}>
      <SectionTitle>
        <Icon size={24} />
        {title}
      </SectionTitle>
      <StyledList>
        {items.map((item) => (
          <ListItem
            key={item.resourceURI}
            as={motion.li}
            variants={itemVariants}>
            <Link to={`/${basePath}/${getResourceId(item.resourceURI)}`}>
              {item.name}
            </Link>
          </ListItem>
        ))}
      </StyledList>
    </Section>
  )
}

export default memo(SectionComponent)
