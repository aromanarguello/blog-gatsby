import React from 'react'
import { Link } from 'gatsby'
import { SEO, Layout, Image } from '../components'
import { Theme } from '../styles/theme'

const IndexPage = () => (
  <Theme>
    <Layout>
      <SEO title="Home" />
      <Image />
      <Link to="/blog/downshift-dropdown">
        Build Dropdown with Downshift + TS
      </Link>
    </Layout>
  </Theme>
)

export default IndexPage
