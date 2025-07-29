import { useRef } from 'react'

import { Title } from '@/components'
import { useGetSeriesQuery } from '@/services'

import { HomeSeriesCard } from '.'
import {
  MissionBriefingsSection,
  SectionSubtitle,
  SeriesContainer,
  SeriesWrapper,
} from './Series.styles'

function Series() {
  const { data: series, isLoading, isError } = useGetSeriesQuery()
  const constraintsRef = useRef<HTMLDivElement>(null)

  const renderContent = () => {
    if (isLoading) {
      return (
        <SectionSubtitle>Loading Mission Briefings...</SectionSubtitle>
      )
    }

    if (isError || !series) {
      return (
        <SectionSubtitle>
          Briefing data corrupted. Please report to command.
        </SectionSubtitle>
      )
    }

    return (
      <SeriesWrapper ref={constraintsRef}>
        <SeriesContainer
          drag="x"
          dragConstraints={constraintsRef}
          initial="hidden"
          animate="visible">
          {series.map((item) => (
            <HomeSeriesCard key={item.id} series={item} />
          ))}
        </SeriesContainer>
      </SeriesWrapper>
    )
  }

  return (
    <MissionBriefingsSection>
      <Title
        title="Missing Briefings"
        subtitle="Review active and archived series operations."
      />
      {renderContent()}
    </MissionBriefingsSection>
  )
}

export default Series
