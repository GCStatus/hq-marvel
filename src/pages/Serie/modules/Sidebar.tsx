import { motion } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import type { Series } from '@/types'
import { getResourceId } from '@/utils'

import {
  itemVariants,
  ResourceTags,
  Section,
  SectionCount,
  SectionTitle,
  Tag,
} from '../Detail.styles'
import { HexListSection } from '.'

interface SeriesSidebarProps {
  series: Series
}

function SidebarComponent({ series }: SeriesSidebarProps) {
  return (
    <>
      <HexListSection
        title="Key Creators"
        count={series.creators.available}
        items={series.creators.items}
        basePath="creators"
      />

      <HexListSection
        title="Featured Characters"
        count={series.characters.available}
        items={series.characters.items}
        basePath="characters"
      />

      {series.stories.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Major Stories{' '}
            <SectionCount>{series.stories.available}</SectionCount>
          </SectionTitle>
          <ResourceTags>
            {series.stories.items.slice(0, 10).map((story) => (
              <Link
                key={story.resourceURI}
                to={`/stories/${getResourceId(story.resourceURI)}`}>
                <Tag>{story.name}</Tag>
              </Link>
            ))}
          </ResourceTags>
        </Section>
      )}
    </>
  )
}

export default memo(SidebarComponent)
