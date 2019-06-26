import React from 'react';
import styled from 'styled-components';

const Search = props => (
  <Wrapper>
    <SearchInput {...props} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 20px;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s} ;
  width: 100%;
  border: 0;
  outline: none;
  background: ${props => props.theme.color.grey};
`;

const SearchInput = styled.input`
  width: 100%;
  color: ${props => props.theme.color.baseLighter};
  border: 0;
  outline: none;
  background: ${props => props.theme.color.grey};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.color.baseLighter};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.color.baseLighter};
  }
`;

export default Search;