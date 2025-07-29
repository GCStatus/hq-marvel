import { motion } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import { getResourceId } from '@/utils'

import {
  ComicCover,
  ComicGrid,
  ComicItem,
  ComicTitle,
  itemVariants,
  Section,
  SectionCount,
  SectionTitle,
} from '../Detail.styles'

interface Comic {
  name: string
  resourceURI: string
}

interface ComicListSectionProps {
  title: string
  count: number
  items: Comic[]
  eventThumbnail: { path: string; extension: string }
}

function ComicListComponent({
  title,
  count,
  items,
  eventThumbnail,
}: ComicListSectionProps) {
  if (count === 0) {
    return null
  }

  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        {title} <SectionCount>{count}</SectionCount>
      </SectionTitle>
      <ComicGrid>
        {items.map((comic) => (
          <Link
            key={comic.resourceURI}
            to={`/comics/${getResourceId(comic.resourceURI)}`}>
            <ComicItem>
              <ComicCover
                $bg={`${eventThumbnail.path}.${eventThumbnail.extension}`}
              />
              <ComicTitle>{comic.name}</ComicTitle>
            </ComicItem>
          </Link>
        ))}
      </ComicGrid>
    </Section>
  )
}

export default memo(ComicListComponent)
