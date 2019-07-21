import { Link } from 'gatsby'
import { Image } from '../'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  color: ${({
    theme: {
      colors: { navy },
    },
  }) => navy};

  @media (min-width: ${({
      theme: {
        breakPoints: { tablet },
      },
    }) => tablet}) {
    width: 610px;
  }
`
const Heading = styled.h2`
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({
    theme: {
      colors: { navy },
    },
  }) => navy};
  padding: 5px;
  cursor: pointer;
`

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 15px 0;
`

const Text = styled.p`
  align-self: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
`

const Header = ({ siteTitle, siteUrl }) => (
  <StyledHeader>
    <Heading>
      <StyledLink to="/">Blog</StyledLink>
    </Heading>
    <Section>
      <Image />
      <Text>{siteTitle}</Text>
    </Section>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteUrl: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Alejandro's Blog",
}

export default Header
