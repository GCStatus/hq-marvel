import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const SkeletonCardContainer = styled.div`
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 12px;
  background-color: #1a1a1a;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

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

export const SkeletonContent = styled.div`
  position: absolute;
  inset: 1px;
  border-radius: 11px;
  background: #000;
  overflow: hidden;
`

export const SkeletonImagePlaceholder = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background-color: #1c1c1e;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
`

export const SkeletonInfo = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SkeletonLine = styled.div<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #2a2a2e;
  border-radius: 4px;
  margin-bottom: 15px;
`
