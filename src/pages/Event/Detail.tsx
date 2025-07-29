import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetEventByIdQuery } from '@/services'

import {
  ContentBody,
  ContentGrid,
  DetailWrapper,
  itemVariants,
  MainContent,
  NoData,
  Section,
  SectionTitle,
  sectionVariants,
  Sidebar,
  Synopsis,
} from './Detail.styles'
import {
  ComicListSection,
  Hero,
  Sidebar as SidebarComponent,
} from './modules'

function Detail() {
  const { id = '' } = useParams()
  const [trigger, { data: event, isLoading, isError }] =
    useLazyGetEventByIdQuery()

  useEffect(() => {
    if (id) {
      trigger(id)
      window.scrollTo(0, 0)
    }
  }, [id, trigger])

  if (isLoading) return <LoadingScreen />

  if (isError || !event) {
    return (
      <Wrapper>
        <NoData>
          <h2>Event Dossier Not Found</h2>
          <p>Could not retrieve data for the specified event ID.</p>
        </NoData>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <DetailWrapper>
        <Hero
          title={event.title}
          thumbnail={event.thumbnail}
          start={event.start}
          end={event.end}
        />

        <ContentBody>
          <ContentGrid>
            <MainContent
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              {event.description && (
                <Section as={motion.div} variants={itemVariants}>
                  <SectionTitle>Mission Briefing</SectionTitle>
                  <Synopsis
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(event.description),
                    }}
                  />
                </Section>
              )}
              <ComicListSection
                title="Tie-In Comics"
                count={event.comics.available}
                items={event.comics.items}
                eventThumbnail={event.thumbnail}
              />
            </MainContent>

            <Sidebar
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              <SidebarComponent event={event} />
            </Sidebar>
          </ContentGrid>
        </ContentBody>
      </DetailWrapper>
    </Wrapper>
  )
}

export default Detail
