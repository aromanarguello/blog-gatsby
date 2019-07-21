import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Section = styled.section``

const CardContainer = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: start;
  box-shadow: ${({
    theme: {
      boxShadows: { regular },
    },
  }) => regular};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 3px;
`

const CardItem = styled.li`
  list-style: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const PostHeader = styled.h2`
  color: ${({
    theme: {
      colors: { navy },
    },
  }) => navy};
  margin: 5px 0;
  cursor: pointer;
`

const PostDescription = styled.p`
  color: ${({
    theme: {
      colors: { grey },
    },
  }) => grey};
  margin: 5px 0;
`

const BlogCards = () => {
  return (
    <Section>
      <CardContainer>
        <CardItem>
          <StyledLink to="/blog/downshift-dropdown">
            <PostHeader id="post-header">
              Build Dropdown with Downshift + TS
            </PostHeader>
          </StyledLink>
          <PostDescription>
            We take a step by step approach to learn how to build a Dropdown
            using Downshift
          </PostDescription>
        </CardItem>
      </CardContainer>
    </Section>
  )
}

export default BlogCards
