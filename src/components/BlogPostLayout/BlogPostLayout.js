import React from "react"
import Helmet from "react-helmet"
import { Layout } from ".."

const BlogPostLayout = ({ children, pageContext }) => {
  const { title, author, date } = pageContext.frontmatter
  return (
    <Layout>
      <article>
        <Helmet>
          <h1>{title}</h1>
        </Helmet>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default BlogPostLayout
