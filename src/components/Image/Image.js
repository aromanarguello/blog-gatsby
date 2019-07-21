import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledImage = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  padding: 0;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
