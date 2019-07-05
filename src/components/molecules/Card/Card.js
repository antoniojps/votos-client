/**
 * Card component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Subtitle } from 'components/atoms';
import { lighten } from 'utils/Colors';

const Card = ({ initials, image, name, color }) => (
  <CardWrapper color={color}>
    <Title modifiers={['xsmall', 'bold', 'colorInverse']}>{initials}</Title>
    <ImageBorder color={color}>
      <ImageWrapper>
        <img src={image} alt={`Logótipo do ${name}`} />
      </ImageWrapper>
    </ImageBorder>
    <SubtitleWrapper>
      <Subtitle modifiers={['xsmall', 'light', 'colorInverse']}>{name}</Subtitle>
    </SubtitleWrapper>
  </CardWrapper>
);

const CardWrapper = styled.article`
  cursor: pointer;
  background: ${props => props.color || props.theme.color.baseLighter};
  border-radius: 20px;
  width: 100%;
  color: ${props => props.theme.color.baseInverse};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: .5rem;
  /* -webkit-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
  -moz-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12); */
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
  box-shadow: 0px 11px 18px -6px rgba(153,153,153,1);
  padding: ${props => props.theme.spacing.s};
  transition: all 0.2s ease;

  &:hover {
   transform: translate3d(0px, -1px, 0px);
  }
`;

const ImageBorder = styled.div`
  margin: ${props => props.theme.spacing.sm};
  background: ${props => lighten(props.color || props.theme.color.baseLighter, 20)};
  border-radius: 50%;
  height: 105px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.div`
  border-radius: 50%;
  background: white;
  height: 80px;
  width: 80px;

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
`

const SubtitleWrapper = styled.div`
  width: 100%;
  text-align: center;
`

Card.propTypes = {
};

Card.defaultProps = {
  title: '',
};

export default Card;
