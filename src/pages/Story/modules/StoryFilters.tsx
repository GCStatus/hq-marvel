import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { StoryFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './StoryFilters.styles'

interface StoryFiltersProps {
  register: UseFormRegister<StoryFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
}

function StoryFilters({
  register,
  handleReset,
  orderOptions,
}: StoryFiltersProps) {
  return (
    <FilterControls<StoryFilterInputs>
      register={register}
      handleReset={handleReset}
      hasSearch={false}>
      <FilterGroup>
        <FilterLabel htmlFor="orderBy">Order By</FilterLabel>
        <FilterSelect id="orderBy" {...register('orderBy')}>
          {Object.entries(orderOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="comics">
          <FiHash size={12} /> From Comic IDs
        </FilterLabel>
        <FilterInput
          id="comics"
          placeholder="e.g., 123,456"
          {...register('comics')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="series">
          <FiHash size={12} /> From Series IDs
        </FilterLabel>
        <FilterInput
          id="series"
          placeholder="e.g., 789,101"
          {...register('series')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="events">
          <FiHash size={12} /> From Event IDs
        </FilterLabel>
        <FilterInput
          id="events"
          placeholder="e.g., 238"
          {...register('events')}
        />
      </FilterGroup>
    </FilterControls>
  )
}

export default memo(StoryFilters)
