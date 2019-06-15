import React from 'react';

import { Layout, MapPortugal } from 'components/molecules';
import SEO from 'utils/Seo';
import styled from 'styled-components';

const IndexPage = () => (
  <Layout>
    <SEO title="Mapa das Eleições Legislativas de 1971 a 2015" />
    <LayoutCenter>
      <MapPortugal />
    </LayoutCenter>
  </Layout>
);

const LayoutCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default IndexPage;
