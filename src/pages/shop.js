import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product/index"

const ShopPage = () => (
  <Layout>
    <SEO title="Shop" />
    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p> */}
    <Product />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default ShopPage
