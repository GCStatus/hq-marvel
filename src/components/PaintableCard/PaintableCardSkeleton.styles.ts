import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const SkeletonCard = styled.div`
  position: relative;
  aspect-ratio: 5 / 7;
  background-color: #2a2a2a;
  border-radius: 1.125rem;
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
      rgba(255, 255, 255, 0.08),
      transparent
    );
    animation: ${shimmer} 1.5s infinite;
  }
`

export const SkeletonTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(0.75rem, 4vw, 1.25rem);
`

export const SkeletonText = styled.div`
  height: clamp(2rem, 8vw, 3.5rem);
  width: 100%;
  background-color: #3a3a3a;
  border-radius: 0.5rem;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%);
`
