import { motion } from 'framer-motion'
import { memo, ReactNode } from 'react'

import {
  itemVariants,
  Section,
  SectionCount,
  SectionTitle,
} from './InfoSection.styles'

interface InfoSectionProps {
  title: string
  count?: number
  children: ReactNode
}

function InfoSection({ title, count, children }: InfoSectionProps) {
  return (
    <Section as={motion.div} variants={itemVariants}>
      <SectionTitle>
        {title}
        {count != null && count > 0 && (
          <SectionCount>{count}</SectionCount>
        )}
      </SectionTitle>
      {children}
    </Section>
  )
}

export default memo(InfoSection)
