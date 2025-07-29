import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { SeriesFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './SeriesFitlers.styles'

interface SeriesFiltersProps {
  register: UseFormRegister<SeriesFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
}

function SeriesFilters({
  register,
  handleReset,
  orderOptions,
}: SeriesFiltersProps) {
  return (
    <FilterControls<SeriesFilterInputs>
      searchFieldName="titleStartsWith"
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
        <FilterLabel htmlFor="startYear">Start Year</FilterLabel>
        <FilterInput
          id="startYear"
          type="number"
          placeholder="e.g., 2006"
          {...register('startYear')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="comics">
          <FiHash size={12} /> Contains Comic IDs
        </FilterLabel>
        <FilterInput
          id="comics"
          placeholder="e.g., 123,456"
          {...register('comics')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="characters">
          <FiHash size={12} /> With Character IDs
        </FilterLabel>
        <FilterInput
          id="characters"
          placeholder="e.g., 1009610"
          {...register('characters')}
        />
      </FilterGroup>
    </FilterControls>
  )
}

export default memo(SeriesFilters)
