import styled from "styled-components"

export default styled.h2`
  font-size: ${props => props.size || props.theme.size.xs};
  font-weight: ${props => props.theme.weight.base};
  color: ${props => props.theme.color.border};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`
