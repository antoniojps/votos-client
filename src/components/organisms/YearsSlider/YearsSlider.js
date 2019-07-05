import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const YearsSlider = ({ from, to, selected }) => {
  const _renderCards = () => {
    let cards = [];
    for (let i = from; i <= to; i++) {
      cards.push(
        <SliderCard modifiers={[i == selected ? 'selected' : '']}>
          <CardSubtitle modifiers={[i == selected ? 'selected' : '']}>ano</CardSubtitle>
          <CardTitle modifiers={[i == selected ? 'selected' : '']}>{i}</CardTitle>
        </SliderCard>
      )
    }
    return cards;
  }

  return (
    <Wrapper>
      {_renderCards()}
    </Wrapper>
  )
}


const TITLE_MODIFIER = {
  selected: ({ theme }) => `
    color: ${theme.color.base}
  `,
};

const SLIDER_CARD_MODIFIER = {
  selected: () => `
    box-shadow: 0px 11px 18px -6px rgba(153,153,153,1);
  `,
};

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing.m} 0;
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: nowrap;
  overflow: scroll;
`

const SliderCard = styled.div`
  border: 0;
  height: 55px;
  min-width: 74px;
  margin: 0 .5rem; 
  -webkit-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
  -moz-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: ${props => props.theme.spacing.xxxs};
  cursor: pointer;
  border: 1px solid ${props => props.theme.color.baseInverse};

  &:hover {
    border: 1px solid ${props => props.theme.color.border};
    p {
      color: ${props => props.theme.color.base}!important;
    }
  }
  ${applyStyleModifiers(SLIDER_CARD_MODIFIER)};
`

const CardSubtitle = styled.p`
  font-size: ${props => props.theme.size.xxs};
  color: ${props => props.theme.color.baseLighter};
  ${applyStyleModifiers(TITLE_MODIFIER)};
`

const CardTitle = styled.p`
  font-size: ${props => props.theme.size.s};
  color: ${props => props.theme.color.baseLighter};
  font-weight: ${props => props.theme.weight.bold};
  ${applyStyleModifiers(TITLE_MODIFIER)};
`

export default YearsSlider;
