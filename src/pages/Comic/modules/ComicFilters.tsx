import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { ComicFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './ComicFilters.styles'

interface ComicFiltersProps {
  register: UseFormRegister<ComicFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
  formatOptions: Record<string, string>
  dateDescriptorOptions: Record<string, string>
}

function ComicFilters({
  register,
  handleReset,
  orderOptions,
  formatOptions,
  dateDescriptorOptions,
}: ComicFiltersProps) {
  return (
    <FilterControls<ComicFilterInputs>
      searchFieldName="titleStartsWith"
      searchPlaceholder="Search by title..."
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
        <FilterLabel htmlFor="format">Format</FilterLabel>
        <FilterSelect id="format" {...register('format')}>
          {Object.entries(formatOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="dateDescriptor">On Sale Date</FilterLabel>
        <FilterSelect id="dateDescriptor" {...register('dateDescriptor')}>
          {Object.entries(dateDescriptorOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="characters">
          <FiHash size={12} /> Character IDs
        </FilterLabel>
        <FilterInput
          id="characters"
          placeholder="e.g., 1009610,1009351"
          {...register('characters')}
        />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="series">
          <FiHash size={12} /> Series IDs
        </FilterLabel>
        <FilterInput
          id="series"
          placeholder="e.g., 1991,1995"
          {...register('series')}
        />
      </FilterGroup>
    </FilterControls>
  )
}

export default memo(ComicFilters)
