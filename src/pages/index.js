import React from 'react'
import { SEO, Layout, BlogCard } from '../components'
import { Theme } from '../styles/theme'

const IndexPage = () => (
  <Theme>
    <Layout>
      <SEO title="Home" />
      <BlogCard />
    </Layout>
  </Theme>
)

export default IndexPage
