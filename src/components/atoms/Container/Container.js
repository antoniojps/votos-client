import styled from 'styled-components';

export default styled.div`
  padding: ${props => props.theme.spacing.xxl};
  text-align: ${props => props.center ? 'center' : 'left'};
`
