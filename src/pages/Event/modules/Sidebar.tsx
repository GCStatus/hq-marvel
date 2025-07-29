import { motion } from 'framer-motion'
import { memo } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Event } from '@/types'
import { getResourceId } from '@/utils'

import {
  itemVariants,
  ResourceTags,
  Section,
  SectionCount,
  SectionTitle,
  Tag,
  TimelineLink,
  TimelineNav,
} from '../Detail.styles'
import { CharacterListSection } from '.'

interface EventSidebarProps {
  event: Event
}

function SidebarComponent({ event }: EventSidebarProps) {
  return (
    <>
      {event.series.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Core Series{' '}
            <SectionCount>{event.series.available}</SectionCount>
          </SectionTitle>
          <ResourceTags>
            {event.series.items.map((series) => (
              <Link
                key={series.resourceURI}
                to={`/series/${getResourceId(series.resourceURI)}`}>
                <Tag>{series.name}</Tag>
              </Link>
            ))}
          </ResourceTags>
        </Section>
      )}

      <CharacterListSection
        title="Key Figures"
        count={event.characters.available}
        items={event.characters.items}
        basePath="characters"
      />

      <CharacterListSection
        title="Architects"
        count={event.creators.available}
        items={event.creators.items}
        basePath="creators"
      />

      {(event.previous || event.next) && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>Timeline Navigation</SectionTitle>
          <TimelineNav>
            {event.previous && (
              <Link
                to={`/events/${getResourceId(event.previous.resourceURI)}`}>
                <TimelineLink>
                  <FiChevronsLeft />
                  <div>
                    <span>Previous Event</span>
                    {event.previous.name}
                  </div>
                </TimelineLink>
              </Link>
            )}
            {event.next && (
              <Link
                to={`/events/${getResourceId(event.next.resourceURI)}`}>
                <TimelineLink $next>
                  <div>
                    <span>Next Event</span>
                    {event.next.name}
                  </div>
                  <FiChevronsRight />
                </TimelineLink>
              </Link>
            )}
          </TimelineNav>
        </Section>
      )}
    </>
  )
}

export default memo(SidebarComponent)
