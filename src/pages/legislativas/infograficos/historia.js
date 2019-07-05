import React, { useState } from 'react';
import { MapPortugal, PageTitle, Search, Order } from 'components/molecules';
import { Layout, YearsSlider } from 'components/organisms';
import { Title } from 'components/atoms';
import SEO from 'utils/Seo';
import styled from 'styled-components';

const orderOptions = [
  { value: 'year', label: 'Ano' }
];

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState(orderOptions[0]);

  return (
    <Layout>
      <SEO title='Mapa das Eleições Legislativas de 1971 a 2015' />
      <PageTitle title='Histórico das eleições legislativas em Portugal' subtitle='Infografia - dados de 1975 a 2015' />
      <FilterActionsWrapper>
        <Order options={orderOptions} defaultValue={orderBy} onChange={e => setOrderBy(e)} />
        <Search placeholder='Pesquisar anos' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </FilterActionsWrapper>
      <YearWrapper>
        <Title modifiers={['small', 'bold']}>1980</Title>
      </YearWrapper>
      <LayoutCenter>
        <MapPortugal />
        <YearsSlider from='1975' to='2015' selected='1980' />
      </LayoutCenter>
    </Layout>
  );
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

const LayoutCenter = styled.div`
  display: flex;
  width: 100%;
  /* height: 100vh; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -${props => props.theme.spacing.l};
`;

const YearWrapper = styled.div`
  margin: ${props => props.theme.spacing.m} 0 0 0;
`

export default IndexPage;
