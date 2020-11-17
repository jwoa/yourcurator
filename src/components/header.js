import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import HeaderPromotionBar from "./headerPromotionBar/index"

const Navigation = styled.div`
  display: inline-block;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -100px;
  a {
    color: #FFF;
    text-decoration: none;
    text-transform: uppercase;
    padding: 17px;
    font-weight: bold;
  }
`

const Header = ({ siteTitle }) => {
  const { state } = useContext(SnipcartContext)

  const data = useStaticQuery(graphql`
    {
      allPrismicPages {
        edges {
          node {
            uid
            data {
              page_title {
                text
              }
            }
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        // background: `#A170D5`,
        // marginBottom: `1.45rem`,
        margin: `0 auto`,
        // maxWidth: 1158,
        padding: `1.45rem 1.0875rem`,
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: `100%`,
        alignItems: "center"
      }}
    >
      {/* <HeaderPromotionBar /> */}
        {/* <h1 style={{ margin: 0, fontSize: 20, textTransform: "uppercase" }}> */}
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {/* {siteTitle} */}
            <img src="https://yourcurator.shop/assets/images/logo.png" width="200px" style={{marginBottom: 0}}/>
          </Link>
        {/* </h1> */}
        {/* <Search /> */}
        <Navigation>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            {data.allPrismicPages.edges.map(({ node }) => (
              <Link key={node.uid} to={`/${node.uid}`}>
                {node.data.page_title.text}
              </Link>
            ))}
          </Menu>
        </Navigation>
        <Link>
              {state.cartQuantity}
              <FaShoppingCart 
                className="snipcart-checkout" 
                style={{ color: "white", marginRight: 10, marginLeft: 10 }}
              />
            </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
