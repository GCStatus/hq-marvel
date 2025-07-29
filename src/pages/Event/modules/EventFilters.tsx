import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { EventFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './EventFilters.styles'

interface EventFiltersProps {
  register: UseFormRegister<EventFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
}

function EventFilters({
  register,
  handleReset,
  orderOptions,
}: EventFiltersProps) {
  return (
    <FilterControls<EventFilterInputs>
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
        <FilterLabel htmlFor="creators">
          <FiHash size={12} /> Creator IDs
        </FilterLabel>
        <FilterInput
          id="creators"
          placeholder="e.g., 2133, 2717"
          {...register('creators')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="characters">
          <FiHash size={12} /> Character IDs
        </FilterLabel>
        <FilterInput
          id="characters"
          placeholder="e.g., 1009368"
          {...register('characters')}
        />
      </FilterGroup>
    </FilterControls>
  )
}

export default memo(EventFilters)
