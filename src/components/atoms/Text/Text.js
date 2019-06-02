import styled from "styled-components"

export default styled.p`
  font-size: ${props =>
    props.big ? props.theme.size.sm : props.theme.size.base};
`
