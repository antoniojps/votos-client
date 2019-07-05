import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components/atoms';

const Search = props => (
  <Wrapper>
    <Icon icon="search" height={20} />
    <SearchInput {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${props => props.theme.color.border};
  overflow: hidden;
  align-items: center;
  padding: 0 0.5rem;
  &:hover {
    border-color: ${props => props.theme.color.baseLighter};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.color.base};
  font-size: ${props => props.theme.size.xxs};
  border: 0;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.color.baseLighter};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.color.baseLighter};
  }
`;

export default Search;
