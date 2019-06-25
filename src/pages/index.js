import React from "react"

import { Layout } from "components/organisms"
import { Logo, Container, Title, Text } from "components/atoms"
import { SocialItem } from "components/molecules"
import SEO from "utils/Seo"
import styled from "styled-components"
import { theme } from "styles/theme"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Votos - Plataforma Online da Democracia Portuguesa"
      hasTitleFormat={false}
    />
    <LayoutCenter>
      <Container padding={theme.spacing.l} center>
        <Logo />
        <Title modifiers={['big', 'bold']} >votos.pt</Title>
        <Text big>Plataforma Online da Democracia Portuguesa</Text>
        <SocialItem />
      </Container>
    </LayoutCenter>
  </Layout>
)

const LayoutCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export default IndexPage
