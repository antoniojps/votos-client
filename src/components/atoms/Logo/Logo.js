import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = ({ hasText }) => {
  if (hasText) return <LogoWithText />;
  return <Image />;
};

Logo.propTypes = {
  hasText: PropTypes.bool,
};

Logo.defaultProps = {
  hasText: false,
};

const LogoWithText = () => (
  <Wrapper>
    <Image />
    <Text>
      Votos
      <Text.Light>.pt</Text.Light>
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: ${props => props.theme.size.ls};
  font-weight: ${props => props.theme.weight.bold};
`;

Text.Light = styled.span`
  font-weight: ${props => props.theme.weight.light};
  color: ${props => props.theme.color.baseLighter};
`;

const Image = () => (
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
