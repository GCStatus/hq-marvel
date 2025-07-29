import { memo } from 'react'

import { GalleryItem } from '../Detail.styles'

interface MemoizedGalleryItemProps {
  comicTitle: string
  image: { path: string; extension: string }
  index: number
}

function GalleryItemComponent({
  comicTitle,
  image,
  index,
}: MemoizedGalleryItemProps) {
  return (
    <GalleryItem>
      <img
        src={`${image.path}.${image.extension}`}
        alt={`${comicTitle} art ${index + 1}`}
        loading="lazy"
        decoding="async"
        width="200"
      />
    </GalleryItem>
  )
}

export default memo(GalleryItemComponent)
