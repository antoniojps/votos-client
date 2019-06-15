import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height: 28) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Mão amarela a escrever com uma caneta. Emoji."
      />
    )}
  />
);

export default Logo;
