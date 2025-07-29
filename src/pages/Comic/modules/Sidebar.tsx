import { motion } from 'framer-motion'
import { memo } from 'react'
import {
  FiBookOpen,
  FiCalendar,
  FiCpu,
  FiDollarSign,
  FiFileText,
  FiHash,
  FiTag,
} from 'react-icons/fi'

import { Hexagon } from '@/components'
import type { Comic } from '@/types'
import { getResourceId } from '@/utils'

import {
  ActionButton,
  Actions,
  DataGrid,
  DataItem,
  DataLabel,
  DataValue,
  HexGrid,
  itemVariants,
  ResourceTags,
  Section,
  SectionCount,
  SectionTitle,
} from '../Detail.styles'
import { Story } from '.'

const MemoizedHexagon = memo(Hexagon)

interface DetailSidebarProps {
  comic: Comic
  onSaleDate?: string
  printPrice?: number
  digitalPurchaseUrl?: string
  detailUrl?: string
}
function SidebarComponent({
  comic,
  onSaleDate,
  printPrice,
  digitalPurchaseUrl,
  detailUrl,
}: DetailSidebarProps) {
  return (
    <>
      <Section as={motion.div} variants={itemVariants}>
        <SectionTitle>Mission Intel</SectionTitle>
        <Actions>
          {detailUrl && (
            <ActionButton
              href={detailUrl}
              target="_blank"
              rel="noopener noreferrer">
              <FiBookOpen /> Official Page
            </ActionButton>
          )}
          {digitalPurchaseUrl && (
            <ActionButton
              href={digitalPurchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              $primary>
              <FiTag /> Buy Digital
            </ActionButton>
          )}
        </Actions>
      </Section>

      <Section as={motion.div} variants={itemVariants}>
        <SectionTitle>Key Data</SectionTitle>
        <DataGrid>
          {onSaleDate && (
            <DataItem>
              <FiCalendar />
              <DataLabel>On Sale</DataLabel>
              <DataValue>
                {new Date(onSaleDate).toLocaleDateString()}
              </DataValue>
            </DataItem>
          )}
          {Number(printPrice || 0) > 0 && (
            <DataItem>
              <FiDollarSign />
              <DataLabel>Print Price</DataLabel>
              <DataValue>${printPrice?.toFixed(2)}</DataValue>
            </DataItem>
          )}
          {comic.format && (
            <DataItem>
              <FiBookOpen />
              <DataLabel>Format</DataLabel>
              <DataValue>{comic.format}</DataValue>
            </DataItem>
          )}
          {comic.pageCount > 0 && (
            <DataItem>
              <FiFileText />
              <DataLabel>Pages</DataLabel>
              <DataValue>{comic.pageCount}</DataValue>
            </DataItem>
          )}
          {comic.series?.name && (
            <DataItem>
              <FiHash />
              <DataLabel>Series</DataLabel>
              <DataValue>{comic.series.name}</DataValue>
            </DataItem>
          )}
          {comic.diamondCode && (
            <DataItem>
              <FiCpu />
              <DataLabel>Diamond Code</DataLabel>
              <DataValue>{comic.diamondCode}</DataValue>
            </DataItem>
          )}
        </DataGrid>
      </Section>

      {comic.creators.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Field Agents{' '}
            <SectionCount>{comic.creators.available}</SectionCount>
          </SectionTitle>
          <HexGrid>
            {comic.creators.items.map((creator) => (
              <MemoizedHexagon
                title={creator.name}
                subtitle={creator.role}
                key={`${creator.name}-${creator.role}`}
                url={`/creators/${getResourceId(creator.resourceURI)}`}
              />
            ))}
          </HexGrid>
        </Section>
      )}

      {comic.characters.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Persons of Interest{' '}
            <SectionCount>{comic.characters.available}</SectionCount>
          </SectionTitle>
          <HexGrid>
            {comic.characters.items.slice(0, 12).map((char) => (
              <MemoizedHexagon
                title={char.name}
                key={char.resourceURI}
                url={`/characters/${getResourceId(char.resourceURI)}`}
              />
            ))}
          </HexGrid>
        </Section>
      )}

      {comic.stories.available > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>
            Contained Stories{' '}
            <SectionCount>{comic.stories.available}</SectionCount>
          </SectionTitle>
          <ResourceTags>
            {comic.stories.items.map((story) => (
              <Story key={story.resourceURI} story={story} />
            ))}
          </ResourceTags>
        </Section>
      )}
    </>
  )
}

export default memo(SidebarComponent)
