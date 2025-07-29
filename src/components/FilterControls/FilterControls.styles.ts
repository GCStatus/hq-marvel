import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const SearchForm = styled.form`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0 15px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus-within {
    border-color: #ed1d24;
    box-shadow: 0 0 10px rgba(237, 29, 36, 0.5);
  }

  svg {
    color: #777;
    margin-right: 10px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  padding: 15px 0;
`

export const FilterButton = styled.button<{ isClose?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ isClose }) => (isClose ? 'transparent' : '#222')};
  border: 1px solid #333;
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #ed1d24;
    border-color: #ed1d24;
  }
`

export const FiltersPanel = styled(motion.div)`
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  align-items: flex-end;
`

export const FilterActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`

export const ResetButton = styled(FilterButton)`
  background: transparent;
  border-color: #555;

  &:hover {
    color: #ed1d24;
    border-color: #ed1d24;
    background: transparent;
  }
`

export const filtersVariants: Variants = {
  hidden: { opacity: 0, height: 0, y: -20 },
  visible: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}
