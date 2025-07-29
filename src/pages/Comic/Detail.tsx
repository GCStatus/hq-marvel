import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { LoadingScreen, Wrapper } from '@/components'
import { useLazyGetComicByIdQuery } from '@/services'

import {
  ContentBody,
  ContentGrid,
  DetailWrapper,
  MainContent as MainContentContainer,
  NoData,
  sectionVariants,
  Sidebar,
} from './Detail.styles'
import { Hero, MainContent, Sidebar as DetailSidebar } from './modules'

function Detail() {
  const { id = '' } = useParams()
  const [trigger, { data: comic, isLoading, isError }] =
    useLazyGetComicByIdQuery()

  useEffect(() => {
    if (id) {
      trigger(id)
      window.scrollTo(0, 0)
    }
  }, [id, trigger])

  const processedData = useMemo(() => {
    if (!comic) return null

    return {
      onSaleDate: comic.dates.find((d) => d.type === 'onsaleDate')?.date,
      printPrice: comic.prices.find((p) => p.type === 'printPrice')?.price,
      digitalPurchaseUrl: comic.urls.find((u) => u.type === 'purchase')
        ?.url,
      detailUrl: comic.urls.find((u) => u.type === 'detail')?.url,
      coverUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      backgroundUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    }
  }, [comic])

  if (isLoading) return <LoadingScreen />

  if (isError || !comic || !processedData) {
    return (
      <Wrapper>
        <NoData>
          <h2>Mission Intel Not Found</h2>
          <p>Could not retrieve data for the specified comic ID.</p>
        </NoData>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <DetailWrapper>
        <Hero
          id={id}
          title={comic.title}
          coverUrl={processedData.coverUrl}
          backgroundUrl={processedData.backgroundUrl}
        />

        <ContentBody>
          <ContentGrid>
            <MainContentContainer
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              animate="visible">
              <MainContent comic={comic} />
            </MainContentContainer>

            <Sidebar
              as={motion.div}
              variants={sectionVariants}
              initial="hidden"
              animate="visible">
              <DetailSidebar
                comic={comic}
                onSaleDate={processedData.onSaleDate}
                printPrice={processedData.printPrice}
                digitalPurchaseUrl={processedData.digitalPurchaseUrl}
                detailUrl={processedData.detailUrl}
              />
            </Sidebar>
          </ContentGrid>
        </ContentBody>
      </DetailWrapper>
    </Wrapper>
  )
}

export default Detail
