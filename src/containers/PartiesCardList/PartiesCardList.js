import React from 'react';
import styled from 'styled-components';
import { Card } from 'components/molecules';
import { useStaticQuery, graphql } from 'gatsby';
import { above } from 'utils/breakpoints';

const query = graphql`
  query AllPartiesPt {
    allPartiesPtJson {
      nodes {
        color
        id
        image
        initials
        name
      }
    }
  }
`;

const PartiesCardList = () => {
  const {
    allPartiesPtJson: { nodes: parties },
  } = useStaticQuery(query);

  return (
    <ListWrapper>
      {parties.map(party => (
        <Card key={party.id} {...party} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.section`
  width: 100%;
  display: grid;
  max-width: 100%;
  grid-template-columns: 50% 50%;
  margin: ${props => props.theme.spacing.m} 0;

  ${above.md`
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-row-gap: ${props => props.theme.spacing.s};
  `}
`;

export default PartiesCardList;
