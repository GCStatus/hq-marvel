import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const SkeletonCardContainer = styled.div`
  position: relative;
  aspect-ratio: 6 / 9;
  width: 100%;
  height: 100%;
`

export const SkeletonCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #181818;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    animation: ${shimmer} 1.5s infinite;
  }
`

export const SkeletonDataPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`

export const SkeletonTextLine = styled.div<{ width: string }>`
  height: 1rem;
  width: ${(props) => props.width};
  background-color: #2a2a2a;
  border-radius: 4px;

  &:last-child {
    height: 34px;
  }
`
