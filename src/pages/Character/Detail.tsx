import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiBookOpen, FiFilm, FiInfo, FiLink, FiTv } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetCharacterByIdQuery } from '@/services'

import {
  ContentGrid,
  Description,
  DescriptionSection,
  DetailWrapper,
  itemVariants,
  MainContent,
  pageVariants,
  ResourceLink,
  ResourceLinks,
  SectionTitle,
  Sidebar,
  UrlPill,
} from './Detail.styles'
import { Hero, Section } from './modules'

function CharacterDetail() {
  const { id = '' } = useParams()
  const [trigger, { data: character, isLoading }] =
    useLazyGetCharacterByIdQuery()

  useEffect(() => {
    if (id) trigger(id)
  }, [id, trigger])

  if (isLoading || !character) return <LoadingScreen />

  const {
    name,
    description,
    modified,
    resourceURI,
    urls,
    thumbnail,
    comics,
    stories,
    events,
    series,
  } = character

  return (
    <Wrapper>
      <DetailWrapper
        as={motion.div}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <Hero name={name} modified={modified} thumbnail={thumbnail} />

        <ContentGrid>
          <MainContent>
            {description && (
              <DescriptionSection
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}>
                <Description>{description}</Description>
              </DescriptionSection>
            )}

            <Section
              title="Comics"
              items={comics.items}
              Icon={FiBookOpen}
              basePath="comics"
            />
            <Section
              title="Series"
              items={series.items}
              Icon={FiTv}
              basePath="series"
            />
          </MainContent>

          <Sidebar>
            <Section
              title="Events"
              items={events.items}
              Icon={FiFilm}
              basePath="events"
            />
            <Section
              title="Stories"
              items={stories.items}
              Icon={FiBookOpen}
              basePath="stories"
            />

            {urls.length > 0 && (
              <DescriptionSection
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}>
                <SectionTitle>
                  <FiLink size={24} /> Official Links
                </SectionTitle>
                <ResourceLinks>
                  {urls.map((url) => (
                    <UrlPill
                      key={url.type}
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {url.type}
                    </UrlPill>
                  ))}
                </ResourceLinks>
              </DescriptionSection>
            )}

            <DescriptionSection
              as={motion.section}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}>
              <SectionTitle>
                <FiInfo size={24} /> More Info
              </SectionTitle>
              <ResourceLinks>
                <ResourceLink
                  href={resourceURI}
                  target="_blank"
                  rel="noopener noreferrer">
                  API Resource URI
                </ResourceLink>
              </ResourceLinks>
            </DescriptionSection>
          </Sidebar>
        </ContentGrid>
      </DetailWrapper>
    </Wrapper>
  )
}

export default CharacterDetail
