import { useMotionValue, useTransform } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router-dom'

import type { Event } from '@/types'

import {
  CardContent,
  CardDate,
  CardGlare,
  CardImage,
  CardTextWrapper,
  CardTitle,
  cardVariants,
  contentVariants,
  EventCardContainer,
} from './EventCard.styles'

interface EventCardComponentProps {
  event: Event
}

function EventCardComponent({ event }: EventCardComponentProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
      <EventCardContainer
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        layout>
        <CardContent
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          variants={contentVariants}
          whileHover="hover"
          initial="rest">
          <CardImage
            $bg={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          />
          <CardGlare />
          <CardTextWrapper>
            {event.start && (
              <CardDate
                variants={{
                  rest: { opacity: 0, y: '100%' },
                  hover: { opacity: 1, y: '0%' },
                }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.3,
                  delay: 0.1,
                }}>
                {new Date(event.start).getFullYear()}
              </CardDate>
            )}
            <div style={{ overflow: 'hidden' }}>
              <CardTitle
                variants={{
                  rest: { opacity: 0, y: '100%' },
                  hover: { opacity: 1, y: '0%' },
                }}
                transition={{ ease: 'easeOut', duration: 0.4 }}>
                {event.title}
              </CardTitle>
            </div>
          </CardTextWrapper>
        </CardContent>
      </EventCardContainer>
    </Link>
  )
}

export default memo(EventCardComponent)
