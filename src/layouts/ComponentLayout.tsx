import { Outlet, useNavigate } from 'react-router-dom'

import {
  BackButton,
  ComponentCanvas,
  itemVariants,
  LayoutHeader,
  layoutVariants,
  LayoutWrapper,
} from './ComponentLayout.styles'

function ComponentLayout() {
  const navigate = useNavigate()

  return (
    <LayoutWrapper
      variants={layoutVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      <LayoutHeader>
        <BackButton variants={itemVariants} onClick={() => navigate('/')}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Return to Hub
        </BackButton>
      </LayoutHeader>

      <ComponentCanvas variants={itemVariants}>
        <Outlet />
      </ComponentCanvas>
    </LayoutWrapper>
  )
}

export default ComponentLayout
