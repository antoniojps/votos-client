import React from "react"

import { Layout, Header } from "components/organisms"
import { PageTitle } from "components/molecules"
import { Container } from "components/atoms"
import SEO from "utils/Seo"
import { theme } from "styles/theme"

const Parties = () => (
  <Layout>
    <SEO
      title="Votos - Partidos políticos"
      hasTitleFormat={false}
    />
    <Header />
    <Container left padding={theme.spacing.sm}>
      <PageTitle title="Partidos políticos" subtitle="2019" />
    </Container>
  </Layout >
)
export default Parties
