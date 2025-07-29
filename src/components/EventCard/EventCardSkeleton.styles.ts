import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const SkeletonCardContainer = styled.div`
  aspect-ratio: 2 / 3;
  position: relative;
  border-radius: 12px;
  background-color: #1c1c1e;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.04)
    );
    animation: ${shimmer} 1.5s infinite;
  }
`

export const SkeletonTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SkeletonLine = styled.div<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #2a2a2e;
  border-radius: 4px;
`
