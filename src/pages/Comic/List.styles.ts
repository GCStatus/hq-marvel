import styled from 'styled-components'

export const LoadMoreButton = styled.button`
  display: block;
  margin: 50px auto 0 auto;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background-color: #ed1d24;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover:not(:disabled) {
    background-color: #fff;
    color: #ed1d24;
    transform: scale(1.05);
  }
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`

export const SkeletonGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 840px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
