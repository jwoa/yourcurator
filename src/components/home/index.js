import React from 'react';
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  text-align: center;
`

const Text = styled.p`
  margin-bottom: 0;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`

const Homepage = () => {
    const data = useStaticQuery(graphql`
    {
      prismicHomepage {
        data {
          banner_title {
            text
          }
          banner_background {
            url
          }
        }
      }
    }
  `);
return (
    <Wrapper>
      {/* <Text>{data.prismicHomepage.data.banner_title.text}</Text> */}
      <img src={data.prismicHomepage.data.banner_background.url} />
    </Wrapper>
  )
}

export default Homepage