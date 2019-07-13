import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Heading = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Heading style={{ margin: 0 }}>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Heading>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
