import React from 'react';

import { Layout } from "components/organisms"
import { Logo, Container, Title, Text } from "components/atoms"
import { SocialItem } from "components/molecules"
import SEO from "utils/Seo"
import { theme } from "styles/theme"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Votos - Plataforma Online da Democracia Portuguesa"
      hasTitleFormat={false}
    />
    <Container center>
      <Logo />
      <Title modifiers={['big', 'bold']} >votos.pt</Title>
      <Text big>Plataforma Online da Democracia Portuguesa</Text>
      <SocialItem />
    </Container>
  </Layout>
);

export default IndexPage;
