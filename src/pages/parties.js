import React, { useState } from 'react'
import { Layout } from 'components/organisms'
import { PageTitle, Card, Search, Order } from 'components/molecules'
import SEO from 'utils/Seo'
import styled from 'styled-components';
import { parties } from 'data/parties/parties';

const orderOptions = [
  { value: 'name', label: 'Nome' },
  { value: 'foundation', label: 'Data de fundação' },
  { value: 'popularity', label: 'Popularidade' }
];

const Parties = () => {
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState(orderOptions[0]);

  return (
    <Layout>
      <SEO
        title='Lista de partidos políticos'
        hasTitleFormat={false}
      />
      <PageTitle title='Partidos políticos' subtitle='2019' />
      <FilterActionsWrapper>
        <Order options={orderOptions} defaultValue={orderBy} onChange={e => setOrderBy(e)} />
        <Search placeholder='Pesquisar partidos' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </FilterActionsWrapper>
      <ListWrapper>
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
        {parties.map(party => <Card key={party.id} {...party} />)}
      </ListWrapper>
    </Layout>
  )
}

const FilterActionsWrapper = styled.div`
  margin: ${props => props.theme.spacing.m} 0 0 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.ms};
  border-bottom: 1px solid ${props => props.theme.color.border};
`;

const ListWrapper = styled.section`
  width: 100%;
  flex-wrap: wrap;
  margin: ${props => props.theme.spacing.m} 0;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
  grid-column-gap: 15px;
  grid-row-gap: 0px; 
`;


export default Parties
