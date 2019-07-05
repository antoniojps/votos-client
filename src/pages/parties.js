import React, { useState } from 'react';
import { Layout } from 'components/organisms';
import { PageTitle, Search, Order } from 'components/molecules';
import { PartiesCardList } from 'containers';
import SEO from 'utils/Seo';
import styled from 'styled-components';

const orderOptions = [
  { value: 'name', label: 'Nome' },
  { value: 'foundation', label: 'Data de fundação' },
  { value: 'popularity', label: 'Popularidade' },
];

const Parties = () => {
  const [defaultOrderBy] = orderOptions;
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState(defaultOrderBy);

  return (
    <Layout>
      <SEO title="Lista de partidos político" hasTitleFormat={false} />
      <PageTitle title="Partidos políticos" subtitle="2019" />
      <FilterActionsWrapper>
        <Order
          options={orderOptions}
          defaultValue={orderBy}
          onChange={e => setOrderBy(e)}
        />
        <Search
          placeholder="Pesquisar partidos"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </FilterActionsWrapper>
      <PartiesCardList />
    </Layout>
  );
};

const FilterActionsWrapper = styled.div`
  margin: ${props => props.theme.spacing.m} 0 0 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.ms};
  border-bottom: 1px solid ${props => props.theme.color.border};
`;

export default Parties;
