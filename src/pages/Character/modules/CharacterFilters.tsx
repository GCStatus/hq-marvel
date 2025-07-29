import { memo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FiHash } from 'react-icons/fi'

import { FilterControls } from '@/components'

import { CharacterFilterInputs } from '../hooks'
import {
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterSelect,
} from './CharacterFilters.styles'

interface CharacterFiltersProps {
  register: UseFormRegister<CharacterFilterInputs>
  handleReset: () => void
  orderOptions: Record<string, string>
}

function CharacterFilters({
  register,
  handleReset,
  orderOptions,
}: CharacterFiltersProps) {
  return (
    <FilterControls<CharacterFilterInputs>
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
          <FiHash size={12} /> Comics IDs
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
    </FilterControls>
  )
}

export default memo(CharacterFilters)
