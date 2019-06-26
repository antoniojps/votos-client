import React, { useState } from "react"
import { Layout } from "components/organisms"
import { PageTitle } from "components/molecules"
import { Search } from "components/atoms"
import SEO from "utils/Seo"
import styled from 'styled-components';

const Parties = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Layout>
      <SEO
        title="Votos - Partidos políticos"
        hasTitleFormat={false}
      />
      <PageTitle title="Partidos políticos" subtitle="2019" />
      <SearchWrapper>
        <Search placeholder='Pesquisar partidos' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </SearchWrapper>
    </Layout>
  )
}

const SearchWrapper = styled.div`
  margin: ${props => props.theme.spacing.m} 0;
  width: 100%;
`;

export default Parties
