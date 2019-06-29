import React from 'react';
import styled, { withTheme } from 'styled-components';
import Select from 'react-select'

const Order = ({ theme, options, onChange }) => {

  const customStyles = {
    option: (provided, state) => ({
      ...provided
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
      outline: 0,
      borderColor: theme.color.border
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  };

  return (
    <Wrapper>
      <Text modifiers={['xsmall', 'light']}>ORDENAR POR</Text>
      <SelectWrapper>
        <Select
          options={options}
          onChange={onChange}
          placeholder=''
          defaultValue={options[0]}
          styles={customStyles}
        />
      </SelectWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const Text = styled.h2`
  text-transform: capitalize;
  font-size: ${props => props.theme.size.xxxs};
  color: ${props => props.theme.color.baseLighter};
  font-weight: ${props => props.theme.weight.light};
`

const SelectWrapper = styled.div`
  min-width: 150px;
  margin: 0 ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.size.xxs};
  color: ${props => props.theme.color.base};

  .css-rwgp9k-control {
    &:hover {
      border-color: ${props => props.theme.color.baseLighter};
    }
  }
`


export default withTheme(Order);
