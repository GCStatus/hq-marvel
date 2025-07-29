import { motion } from 'framer-motion'
import { memo } from 'react'
import sanitizeHtml from 'sanitize-html'

import type { Comic } from '@/types'

import {
  GalleryGrid,
  itemVariants,
  Section,
  SectionTitle,
  Synopsis,
  TextObjectContent,
  TextObjectType,
  TextObjectWrapper,
} from '../Detail.styles'
import { GalleryItem } from '.'

interface MainContentProps {
  comic: Comic
}

function MainContentComponent({ comic }: MainContentProps) {
  return (
    <>
      {comic.description && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>Synopsis</SectionTitle>
          <Synopsis
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(comic.description),
            }}
          />
        </Section>
      )}

      {comic.textObjects.length > 0 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>Official Intel</SectionTitle>
          {comic.textObjects.map((text, index) => (
            <TextObjectWrapper key={index}>
              <TextObjectType>
                {text.type.replace(/_/g, ' ')}
              </TextObjectType>
              <TextObjectContent
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(text.text),
                }}
              />
            </TextObjectWrapper>
          ))}
        </Section>
      )}

      {comic.images.length > 1 && (
        <Section as={motion.div} variants={itemVariants}>
          <SectionTitle>Variant Gallery</SectionTitle>
          <GalleryGrid>
            {comic.images.map((img, index) => (
              <GalleryItem
                key={index}
                comicTitle={comic.title}
                image={img}
                index={index}
              />
            ))}
          </GalleryGrid>
        </Section>
      )}
    </>
  )
}

export default memo(MainContentComponent)
