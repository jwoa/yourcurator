import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplates = ({ data }) => {
console.log(data)
  return (
    <Layout>
      <SEO title={data.prismicPages.data.page_title.text} />
      <h2>
        You are browsing <u>{data.prismicPages.data.page_title.text}</u>
      </h2>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($uid: String) {
    prismicPages(uid: {eq: $uid}) {
        id
        uid
        data {
        banner_background {
            url
        }
        page_title {
            text
        }
        body {
            ... on PrismicPagesBodyText {
            id
            internal {
                content
            }
            }
            ... on PrismicPagesBodyFullWidthImage {
            id
            internal {
                content
            }
            }
        }
        }
    }
  }
`

export default PageTemplates
