import React from "react"
import { graphql } from "gatsby"
// import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BannerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 400px;
  text-align: center;
  img {
    width: 100%;
    height: 400px;
  }
`

const PageTemplates = ({ data }) => {
console.log(data)
  return (
    <Layout>
      <SEO title={data.prismicPages.data.page_title.text} />
      <h2>
        You are browsing <u>{data.prismicPages.data.page_title.text}</u>
      </h2>
      <BannerWrapper>
        <img src={data.prismicPages.data.banner_background.url} alt="Banner"/>
      </BannerWrapper>
        {/* <p>{data.prismicPages.data.body.primary.content.text}</p> */}
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
                primary {
                  content {
                    text
                  }
                }
              }
              # ... on PrismicPagesBodyFullWidthImage {
              # id
              # internal {
              #   content
              # }
              # }
          }
        }
    }
  }
`

export default PageTemplates
