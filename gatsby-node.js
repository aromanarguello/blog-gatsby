const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath with "blog" prefix
      value: `/blog${value}`,
    })
  }
}

// pagination
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(prunLength: 250)
            fields: {
              slug
            }
            frontmatter {
              title
              author
            }
          }
        }
      }
    }
  `).then((res, err) => {
    if (err) return Promise.reject(errors)
    const posts = result.data.allMdx.edges

    let size = 10
    let start = 0
    let groupedPosts = Array.from(Array(Math.ceil(posts.length / size)))
    groupedPosts = groupedPosts.map(() => {
      const group = posts.slice(start, start + size)
      start += size
      return group
    })

    groupedPosts.forEach((group, index) => {
      const page = index + 1
      createPage({
        path: `/blog/${page}`,
        component: path.resolve(
          "./src/components/BrowseBlogPosts/BrowseBlogPosts.js"
        ),
        context: { groupedPosts, group, page },
      })
    })
  })
}
