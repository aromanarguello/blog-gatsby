/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Header } from '../'
import Box from '../Box/Box'
import { GlobalStyles } from '../../styles/global'

const StyledBox = styled(Box)`
  width: 100%;
  padding-top: 0;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
`

const Main = styled.main``

const Footer = styled.footer``

const Link = styled.a``

const Text = styled.p`
  color: ${({
    theme: {
      colors: { navy },
    },
  }) => navy};
`

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          url
        }
      }
    }
  `)

  console.log(site)

  return (
    <>
      <GlobalStyles />
      <StyledBox
        margin="0"
        padding="0"
        id="layout-container"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Header
          siteUrl={site.siteMetadata.url}
          siteTitle={site.siteMetadata.title}
        />
        <Main>{children}</Main>
        <Footer>
          <Text>Made by: Alejandro Roman</Text>
        </Footer>
      </StyledBox>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
