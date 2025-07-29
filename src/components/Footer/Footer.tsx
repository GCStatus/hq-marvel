import {
  Attribution,
  FooterContent,
  FooterSection,
  FooterWrapper,
} from './Footer.styles'

const featuredCharacters = [
  { name: 'Iron Man', href: '/characters/1009368' },
  { name: 'Captain America', href: '/characters/1009220' },
  { name: 'Spider-Man', href: '/characters/1009610' },
  { name: 'Hulk', href: '/characters/1009351' },
  { name: 'Thor', href: '/characters/1009664' },
]

const mainLinks = [
  { title: 'Characters', href: '/characters' },
  { title: 'Comics', href: '/comics' },
  { title: 'Creators', href: '/creators' },
  { title: 'Events', href: '/events' },
  { title: 'Series', href: '/series' },
  { title: 'Stories', href: '/stories' },
]

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h4>Featured Characters</h4>
          <ul>
            {featuredCharacters.map((char) => (
              <li key={char.name}>
                <a href={char.href}>{char.name}</a>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Navigation</h4>
          <ul>
            {mainLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>More</h4>
          <ul>
            <li>
              <a
                href="https://www.marvel.com/"
                target="_blank"
                rel="noopener noreferrer">
                Official Marvel Site
              </a>
            </li>
            <li>
              <a
                href="https://www.marvel.com/unlimited"
                target="_blank"
                rel="noopener noreferrer">
                Marvel Unlimited
              </a>
            </li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Attribution>
        <a
          href="http://marvel.com"
          target="_blank"
          rel="noopener noreferrer">
          Data provided by Marvel. © 2024 MARVEL
        </a>
      </Attribution>
    </FooterWrapper>
  )
}

export default Footer
