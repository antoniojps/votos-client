/**
 * PageTitle component 
 */

import React from "react"
// import PropTypes from "prop-types"
// import styled, { ThemeProvider } from "styled-components"
// import { theme } from "styles/theme"
import { Subtitle, Title } from "components/atoms";
import { theme } from "styles/theme"

const PageTitle = ({ subtitle, title }) => (
    <>
        {subtitle && <Subtitle size={theme.size.s}>{subtitle}</Subtitle>}
        <Title size={theme.size.m} margin={`${theme.spacing.xxxs} 0`}>{title}</Title>
    </>
)

PageTitle.propTypes = {}

export default PageTitle
