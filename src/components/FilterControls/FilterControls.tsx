import { AnimatePresence, motion } from 'framer-motion'
import { JSX, memo, ReactNode, useState } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { FiRefreshCw, FiSearch, FiSliders, FiX } from 'react-icons/fi'

import {
  ControlsWrapper,
  FilterActions,
  FilterButton,
  FiltersPanel,
  filtersVariants,
  ResetButton,
  SearchForm,
  SearchInput,
} from './FilterControls.styles'

interface FilterControlsProps<T extends FieldValues> {
  searchFieldName?: Path<T>
  searchPlaceholder?: string
  register: UseFormRegister<T>
  handleReset: () => void
  children: ReactNode
  hasSearch?: boolean
}

function FilterControlsInner<T extends FieldValues>({
  searchFieldName,
  searchPlaceholder,
  register,
  handleReset,
  children,
  hasSearch = true,
}: FilterControlsProps<T>) {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)

  return (
    <>
      {hasSearch && searchFieldName && (
        <ControlsWrapper>
          <SearchForm>
            <FiSearch />
            <SearchInput
              placeholder={searchPlaceholder}
              {...register(searchFieldName)}
            />
          </SearchForm>
          <FilterButton onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
            <FiSliders />
            <span>Filters</span>
          </FilterButton>
        </ControlsWrapper>
      )}

      <AnimatePresence>
        {isFiltersOpen && (
          <FiltersPanel
            as={motion.div}
            variants={filtersVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {children}

            <FilterActions>
              <ResetButton onClick={handleReset}>
                <FiRefreshCw /> Reset
              </ResetButton>
              <FilterButton
                isClose
                onClick={() => setIsFiltersOpen(false)}>
                <FiX /> Close
              </FilterButton>
            </FilterActions>
          </FiltersPanel>
        )}
      </AnimatePresence>
    </>
  )
}

const FilterControls = memo(FilterControlsInner) as <
  T extends FieldValues,
>(
  props: FilterControlsProps<T>,
) => JSX.Element

export default FilterControls
