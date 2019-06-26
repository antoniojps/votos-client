/**
 * PageTitle component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle, Title } from 'components/atoms';
import styled from 'styled-components';

const PageTitle = ({ subtitle, title }) => (
  <Wrapper>
    {subtitle && <Subtitle modifiers={['small']}>{subtitle}</Subtitle>}
    <Title modifiers={['medium', 'bold']}>{title}</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: ${props => props.theme.spacing.m} 0;
  ${Subtitle} {
    padding-bottom: ${props => props.theme.spacing.xxms};
  }
`;

PageTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
  title: '',
};

export default PageTitle;
