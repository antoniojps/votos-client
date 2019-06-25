import styled from "styled-components"

export default styled.div`
  padding: ${props => props.padding || 0};
  text-align: ${props => props.center ? 'center' : 'left'};
`
