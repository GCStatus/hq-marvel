import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

export const SkeletonRowContainer = styled.div`
  position: relative;
  background-color: #1a1a1a;
  border-left: 4px solid transparent;
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

export const SkeletonRowContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  align-items: center;
  gap: 30px;
  padding: 20px 25px;
`

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SkeletonStats = styled.div`
  display: flex;
  gap: 25px;
`

export const SkeletonLine = styled.div<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #2a2a2e;
  border-radius: 4px;
`
