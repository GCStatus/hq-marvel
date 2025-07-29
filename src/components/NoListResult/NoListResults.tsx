import { memo } from 'react'

import { NoResults } from './NoListResults.styles'

interface NoListResultsProps {
  title: string
}

function NoListResults({ title }: NoListResultsProps) {
  return (
    <NoResults>
      <h2>{title}</h2>
      <p>
        Your search returned no results. Try adjusting or resetting the
        filters.
      </p>
    </NoResults>
  )
}

export default memo(NoListResults)
