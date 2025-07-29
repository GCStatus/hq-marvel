import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { CreatorFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './CreatorFilters.styles'

interface CreatorFiltersProps {
  register: UseFormRegister<CreatorFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
}

function CreatorFilters({
  register,
  handleReset,
  orderOptions,
}: CreatorFiltersProps) {
  return (
    <FilterControls<CreatorFilterInputs>
      searchFieldName="nameStartsWith"
      searchPlaceholder="Search by name..."
      register={register}
      handleReset={handleReset}>
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
          <FiHash size={12} /> Comic IDs
        </FilterLabel>
        <FilterInput
          id="comics"
          placeholder="e.g., 123,456"
          {...register('comics')}
        />
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="series">
          <FiHash size={12} /> Series IDs
        </FilterLabel>
        <FilterInput
          id="series"
          placeholder="e.g., 789,101"
          {...register('series')}
        />
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="events">
          <FiHash size={12} /> Event IDs
        </FilterLabel>
        <FilterInput
          id="events"
          placeholder="e.g., 238,240"
          {...register('events')}
        />
      </FilterGroup>
    </FilterControls>
  )
}

export default memo(CreatorFilters)
