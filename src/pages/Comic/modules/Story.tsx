import { memo } from 'react'
import { Link } from 'react-router-dom'

import { getResourceId } from '@/utils'

import { Tag } from '../Detail.styles'

interface MemoizedStoryProps {
  story: { name: string; resourceURI: string }
}

function StoryComponent({ story }: MemoizedStoryProps) {
  return (
    <Link to={`/stories/${getResourceId(story.resourceURI)}`}>
      <Tag>{story.name}</Tag>
    </Link>
  )
}

export default memo(StoryComponent)
