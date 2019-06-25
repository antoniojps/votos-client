/**
 * Header component 
 */

import React from "react"
// import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "styles/theme"

const Header = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <div>logo extended</div>
    </Wrapper>
  </ThemeProvider>
)

const Wrapper = styled.div`
  width: 100%;
  display: inline-flex;
  background: ${({ theme }) => theme.color.baseInverse};
  padding: ${({ theme }) => theme.spacing.sm};
`;

Header.propTypes = {}

export default Header
