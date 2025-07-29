import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #121212;
  color: #a0a0a0;
  padding: 40px 40px 20px 40px;
  border-top: 1px solid #222;
  z-index: 1;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`

export const FooterSection = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
    border-bottom: 2px solid #ed1d24;
    padding-bottom: 8px;
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #a0a0a0;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #ed1d24;
    }
  }
`

export const Attribution = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #222;
  font-size: 0.8rem;
  color: #777;

  a {
    color: #999;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
