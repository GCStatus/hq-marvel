import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { Loadable as L, Loader, LoadingScreen } from './components'
import { ComponentLayout } from './layouts'

export const Routes = () => {
  const Home = L(lazy(() => import('./pages/Home')))
  const CharacterList = L(lazy(() => import('./pages/Character/List')))
  const CharacterDetails = L(
    lazy(() => import('./pages/Character/Detail')),
  )
  const ComicList = L(lazy(() => import('./pages/Comic/List')))
  const ComicDetails = L(lazy(() => import('./pages/Comic/Detail')))
  const CreatorList = L(lazy(() => import('./pages/Creator/List')))
  const CreatorDetails = L(lazy(() => import('./pages/Creator/Detail')))
  const SeriesList = L(lazy(() => import('./pages/Serie/List')))
  const SeriesDetails = L(lazy(() => import('./pages/Serie/Detail')))
  const EventsList = L(lazy(() => import('./pages/Event/List')))
  const EventsDetails = L(lazy(() => import('./pages/Event/Detail')))
  const StoriesList = L(lazy(() => import('./pages/Story/List')))
  const StoriesDetails = L(lazy(() => import('./pages/Story/Detail')))

  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/characters',
      children: [
        { index: true, element: <CharacterList /> },
        { path: ':id', element: <CharacterDetails /> },
      ],
    },
    {
      path: '/comics',
      children: [
        { index: true, element: <ComicList /> },
        {
          path: ':id',
          element: <ComicDetails />,
        },
      ],
    },
    {
      path: '/creators',
      children: [
        { index: true, element: <CreatorList /> },
        { path: ':id', element: <CreatorDetails /> },
      ],
    },
    {
      path: '/series',
      children: [
        { index: true, element: <SeriesList /> },
        { path: ':id', element: <SeriesDetails /> },
      ],
    },
    {
      path: '/events',
      children: [
        { index: true, element: <EventsList /> },
        { path: ':id', element: <EventsDetails /> },
      ],
    },
    {
      path: '/stories',
      children: [
        { index: true, element: <StoriesList /> },
        { path: ':id', element: <StoriesDetails /> },
      ],
    },
    {
      path: 'components',
      element: <ComponentLayout />,
      children: [
        { path: 'loader', element: <Loader animate /> },
        { path: 'loading-screen', element: <LoadingScreen /> },
      ],
    },
  ])
}
