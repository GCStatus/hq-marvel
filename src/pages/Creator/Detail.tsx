import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetCreatorByIdQuery } from '@/services'

import {
  ContentBody,
  ContentGrid,
  MainContent,
  NoData,
  sectionVariants,
  Sidebar,
} from './Detail.styles'
import { Hero, Section, Sidebar as CreatorSidebar } from './modules'

function Detail() {
  const { id = '' } = useParams()
  const [trigger, { data: creator, isLoading, isError }] =
    useLazyGetCreatorByIdQuery()

  useEffect(() => {
    if (id) {
      trigger(id)
      window.scrollTo(0, 0)
    }
  }, [id, trigger])

  const fullName = useMemo(() => {
    if (!creator) return ''

    const name = `${creator.firstName} ${creator.lastName}`.trim()

    if (name) return name

    return 'Unknown Creator'
  }, [creator])

  if (isLoading) return <LoadingScreen />

  if (isError || !creator) {
    return (
      <Wrapper>
        <NoData>
          <h2>Creator Profile Not Found</h2>
          <p>Could not retrieve data for the specified creator ID.</p>
        </NoData>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Hero fullName={fullName} thumbnail={creator.thumbnail} />

      <ContentBody>
        <ContentGrid>
          <MainContent
            as={motion.div}
            variants={sectionVariants}
            initial="hidden"
            animate="visible">
            <Section
              title="Featured Comics"
              count={creator.comics.available}
              items={creator.comics.items}
              basePath="comics"
            />

            <Section
              title="Worked on Series"
              count={creator.series.available}
              items={creator.series.items}
              basePath="series"
            />
          </MainContent>

          <Sidebar
            as={motion.div}
            variants={sectionVariants}
            initial="hidden"
            animate="visible">
            <CreatorSidebar creator={creator} />
          </Sidebar>
        </ContentGrid>
      </ContentBody>
    </Wrapper>
  )
}

export default Detail
