import styled from 'styled-components'

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FilterLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
`

export const FilterInput = styled.input`
  width: 100%;
  background: #151515;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #ed1d24;
  }
`

export const FilterSelect = styled.select`
  background: #151515;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
`
