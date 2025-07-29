import { motion } from 'framer-motion'
import { memo } from 'react'
import { FiBookOpen, FiChevronRight, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import type { Story } from '@/types'

import {
  dossierVariants,
  itemVariants,
  RowContent,
  RowInfo,
  RowShine,
  RowStats,
  RowTitle,
  RowType,
  rowVariants,
  shineVariants,
  StatItem,
  StoryRowContainer,
  ViewDossier,
} from './StoryCard.styles'

interface StoryCardComponentProps {
  story: Story
}

function StoryCardComponent({ story }: StoryCardComponentProps) {
  return (
    <Link to={`/stories/${story.id}`} style={{ textDecoration: 'none' }}>
      <StoryRowContainer
        variants={itemVariants}
        layout
        initial="rest"
        whileHover="hover"
        animate="rest">
        <RowContent variants={rowVariants}>
          <RowShine variants={shineVariants} />
          <RowInfo>
            <RowTitle>{story.title || 'Untitled Story'}</RowTitle>
            <RowType>{story.type.replace(/_/g, ' ')}</RowType>
          </RowInfo>
          <RowStats>
            <StatItem>
              <FiBookOpen size={14} />
              <strong>{story.comics.available}</strong> Comics
            </StatItem>
            <StatItem>
              <FiUsers size={14} />
              <strong>{story.characters.available}</strong> Characters
            </StatItem>
          </RowStats>
          <ViewDossier as={motion.div} variants={dossierVariants}>
            View Dossier <FiChevronRight />
          </ViewDossier>
        </RowContent>
      </StoryRowContainer>
    </Link>
  )
}

export default memo(StoryCardComponent)
