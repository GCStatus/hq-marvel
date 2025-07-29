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
  count: number
  items: Comic[]
  seriesThumbnail: { path: string; extension: string }
}

const MemoizedComicItem = memo(function ComicItemComponent({
  comic,
  seriesThumbnail,
}: {
  comic: Comic
  seriesThumbnail: any
}) {
  return (
    <Link to={`/comics/${getResourceId(comic.resourceURI)}`}>
      <ComicItem>
        <ComicCover
          $bg={`${seriesThumbnail.path}.${seriesThumbnail.extension}`}
        />
        <ComicTitle>{comic.name}</ComicTitle>
      </ComicItem>
    </Link>
  )
})

function ComicListComponent({
  count,
  items,
  seriesThumbnail,
}: ComicListSectionProps) {
  if (count === 0) {
    return null
  }

  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        Comics in this Series <SectionCount>{count}</SectionCount>
      </SectionTitle>
      <ComicGrid>
        {items.map((comic) => (
          <MemoizedComicItem
            key={comic.resourceURI}
            comic={comic}
            seriesThumbnail={seriesThumbnail}
          />
        ))}
      </ComicGrid>
    </Section>
  )
}

export default memo(ComicListComponent)
