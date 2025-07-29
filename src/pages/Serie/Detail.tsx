import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetSeriesByIdQuery } from '@/services'

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
  const [trigger, { data: series, isLoading, isError }] =
    useLazyGetSeriesByIdQuery()

  useEffect(() => {
    if (id) {
      trigger(id)
      window.scrollTo(0, 0)
    }
  }, [id, trigger])

  if (isLoading) return <LoadingScreen />

  if (isError || !series) {
    return (
      <Wrapper>
        <NoData>
          <h2>Series Data Not Found</h2>
          <p>Could not retrieve data for the specified series ID.</p>
        </NoData>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <DetailWrapper>
        <Hero
          title={series.title}
          thumbnail={series.thumbnail}
          startYear={series.startYear}
          endYear={series.endYear}
          rating={series.rating}
          comicCount={series.comics.available}
        />

        <ContentBody>
          <ContentGrid>
            <MainContent
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              {series.description && (
                <Section as={motion.div} variants={itemVariants}>
                  <SectionTitle>Synopsis</SectionTitle>
                  <Synopsis
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(series.description),
                    }}
                  />
                </Section>
              )}
              <ComicListSection
                count={series.comics.available}
                items={series.comics.items}
                seriesThumbnail={series.thumbnail}
              />
            </MainContent>

            <Sidebar
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              <SidebarComponent series={series} />
            </Sidebar>
          </ContentGrid>
        </ContentBody>
      </DetailWrapper>
    </Wrapper>
  )
}

export default Detail
