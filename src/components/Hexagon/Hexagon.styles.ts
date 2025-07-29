import styled from 'styled-components'

export const Hexagon = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #181818;
  aspect-ratio: 1 / 1.15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
  will-change: transform, background;

  &:hover {
    transform: scale(1.1);
    background: #ed1d24;
    z-index: 10;
  }
`

export const HexagonTitle = styled.h4`
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
  font-weight: 500;
`

export const HexagonSubtitle = styled.p`
  font-size: 0.7rem;
  color: #c0c0c0;
  text-transform: uppercase;
  margin: 5px 0 0 0;
  transition-duration: 300ms;
  will-change: transform;

  ${Hexagon}:hover & {
    color: #fff;
  }
`
