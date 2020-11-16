import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product/index"
import Homepage from "../components/home/index"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Homepage />
    {/* <Product /> */}
  </Layout>
)

export default IndexPage
