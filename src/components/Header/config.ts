export interface Dropdown {
  title: string
  href: string
}

export interface Link {
  title: string
  href?: string
  dropdown?: Dropdown[]
}

export const NAV_LINKS: Link[] = [
  {
    title: 'Characters',
    href: '/characters',
  },
  {
    title: 'Comics',
    href: '/comics',
  },
  {
    title: 'Creators',
    href: '/creators',
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Series',
    href: '/series',
  },
  {
    title: 'Stories',
    href: '/stories',
  },
  {
    title: 'Components',
    dropdown: [
      {
        title: 'Loading Screen',
        href: '/components/loading-screen',
      },
      {
        title: 'Loader',
        href: '/components/loader',
      },
    ],
  },
]
