import React from "react"
import { graphql } from "gatsby"

const Blog = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          slug
          body
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Blog