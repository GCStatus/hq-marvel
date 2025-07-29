import { motion } from 'framer-motion'
import { memo } from 'react'
import {
  FiBook,
  FiBox,
  FiCalendar,
  FiExternalLink,
  FiGitMerge,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Creator } from '@/types'
import { getResourceId } from '@/utils'

import {
  ActionButton,
  Actions,
  itemVariants,
  LastModified,
  ResourceTags,
  Section,
  SectionCount,
  SectionTitle,
  StatGrid,
  StatItem,
  StatLabel,
  StatValue,
  Tag,
} from '../Detail.styles'

interface CreatorSidebarProps {
  creator: Creator
}

function SidebarComponent({ creator }: CreatorSidebarProps) {
  return (
    <>
      <Section as={motion.div} variants={itemVariants}>
        <SectionTitle>Career Statistics</SectionTitle>
        <StatGrid>
          <StatItem>
            <FiBook />
            <StatValue>{creator.comics.available}</StatValue>
            <StatLabel>Comics</StatLabel>
          </StatItem>
          <StatItem>
            <FiBox />
            <StatValue>{creator.series.available}</StatValue>
            <StatLabel>Series</StatLabel>
          </StatItem>
          <StatItem>
            <FiGitMerge />
            <StatValue>{creator.stories.available}</StatValue>
            <StatLabel>Stories</StatLabel>
          </StatItem>
        </StatGrid>
      </Section>

      {creator.urls.length > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>Profile Links</SectionTitle>
          <Actions>
            {creator.urls.map((url) => (
              <ActionButton
                key={url.type}
                href={url.url}
                target="_blank"
                rel="noopener noreferrer">
                <FiExternalLink /> {url.type}
              </ActionButton>
            ))}
          </Actions>
        </Section>
      )}

      {creator.events.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Major Events{' '}
            <SectionCount>{creator.events.available}</SectionCount>
          </SectionTitle>
          <ResourceTags>
            {creator.events.items.map((event) => (
              <Link
                key={event.resourceURI}
                to={`/events/${getResourceId(event.resourceURI)}`}
                target="_blank"
                rel="noopener noreferrer">
                <Tag>{event.name}</Tag>
              </Link>
            ))}
          </ResourceTags>
        </Section>
      )}

      <Section as={motion.div} variants={itemVariants}>
        <LastModified>
          <FiCalendar /> Profile last updated:{' '}
          {new Date(creator.modified).toLocaleDateString()}
        </LastModified>
      </Section>
    </>
  )
}

export default memo(SidebarComponent)
