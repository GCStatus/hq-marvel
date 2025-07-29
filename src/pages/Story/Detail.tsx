import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiBook, FiCalendar } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetStoryByIdQuery } from '@/services'
import { getResourceId } from '@/utils'

import {
  ContentBody,
  ContentGrid,
  DetailWrapper,
  itemVariants,
  LastModified,
  MainContent,
  NoData,
  OriginalIssue,
  Section,
  SectionTitle,
  sectionVariants,
  Sidebar,
  Synopsis,
} from './Detail.styles'
import { Hero, HexListSection, ResourceTagSection } from './modules'

function Detail() {
  const { id = '' } = useParams()
  const [trigger, { data: story, isLoading, isError }] =
    useLazyGetStoryByIdQuery()

  useEffect(() => {
    if (id) {
      trigger(id)
      window.scrollTo(0, 0)
    }
  }, [id, trigger])

  if (isLoading) return <LoadingScreen />

  if (isError || !story) {
    return (
      <Wrapper>
        <NoData>
          <h2>Story File Not Found</h2>
          <p>Could not retrieve data for the specified story ID.</p>
        </NoData>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <DetailWrapper>
        <Hero title={story.title} type={story.type} />

        <ContentBody>
          <ContentGrid>
            <MainContent
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              {story.description && (
                <Section as={motion.div} variants={itemVariants}>
                  <SectionTitle>Narrative Details</SectionTitle>
                  <Synopsis
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(story.description),
                    }}
                  />
                </Section>
              )}

              {story.originalIssue?.resourceURI && (
                <Section as={motion.div} variants={itemVariants}>
                  <SectionTitle>Original Issue</SectionTitle>
                  <Link
                    to={`/comics/${getResourceId(story.originalIssue.resourceURI)}`}>
                    <OriginalIssue>
                      <FiBook />
                      <span>{story.originalIssue.name}</span>
                    </OriginalIssue>
                  </Link>
                </Section>
              )}
            </MainContent>

            <Sidebar
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              <ResourceTagSection
                title="Appears in Comics"
                count={story.comics.available}
                items={story.comics.items}
                basePath="comics"
              />

              <ResourceTagSection
                title="Part of Series"
                count={story.series.available}
                items={story.series.items}
                basePath="series"
              />

              <HexListSection
                title="Key Characters"
                count={story.characters.available}
                items={story.characters.items}
                basePath="characters"
              />

              <HexListSection
                title="Key Creators"
                count={story.creators.available}
                items={story.creators.items}
                basePath="creators"
              />

              <Section as={motion.div} variants={itemVariants}>
                <LastModified>
                  <FiCalendar /> File last updated:{' '}
                  {new Date(story.modified).toLocaleDateString()}
                </LastModified>
              </Section>
            </Sidebar>
          </ContentGrid>
        </ContentBody>
      </DetailWrapper>
    </Wrapper>
  )
}

export default Detail
