import React from 'react';
import { Link } from 'gatsby';
import { Text } from 'components/atoms';
import styled from 'styled-components';

const SocialItem = () => {
  return (
    <Wrapper>
      <span />
      <a href="https://twitter.com/VotosPt" target="_blank" rel="noreferrer">
        <Text>Twitter</Text>
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1.775a7.23 7.23 0 0 1-2.12.596A3.788 3.788 0 0 0 17.503.277a7.331 7.331 0 0 1-2.347.92A3.64 3.64 0 0 0 12.461 0C10.422 0 8.77 1.696 8.77 3.787c0 .297.032.586.095.863-3.068-.158-5.789-1.666-7.61-3.958-.318.559-.5 1.21-.5 1.904 0 1.315.653 2.474 1.643 3.153a3.622 3.622 0 0 1-1.673-.476v.048c0 1.835 1.274 3.366 2.962 3.714-.31.086-.636.133-.973.133-.238 0-.47-.024-.695-.07.47 1.505 1.833 2.6 3.448 2.63A7.29 7.29 0 0 1 0 13.297 10.247 10.247 0 0 0 5.66 15c6.793 0 10.505-5.772 10.505-10.778l-.012-.49A7.481 7.481 0 0 0 18 1.775z"
            fill="#5BCFFF"
          />
        </svg>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  padding: ${props => props.theme.spacing.xxs};
  position: relative;
  margin-top: ${props => props.theme.spacing.s};
  &:hover {
    &:before {
      width: 10px;
    }
    &:after {
      height: 10px;
    }
    span {
      &:before {
        width: 10px;
      }
      &:after {
        height: 10px;
      }
    }
  }
  &:before {
    content: '';
    height: 1px;
    width: 0px;
    transition: width 0.4s;
    background-color: ${props => props.theme.color.twitter};
    top: 90%;
    left: 0;
    position: absolute;
  }
  &:after {
    content: '';
    height: 0px;
    transition: height 0.4s;
    width: 1px;
    background-color: ${props => props.theme.color.twitter};
    top: 90%;
    left: 0;
    position: absolute;
    transform: translate(0px, -10px);
  }
  span {
    &:before {
      content: '';
      height: 1px;
      width: 0px;
      transition: width 0.4s;
      background-color: ${props => props.theme.color.twitter};
      top: 0;
      left: 100%;
      transform: translateX(-10px);
      position: absolute;
    }
    &:after {
      content: '';
      width: 1px;
      height: 0px;
      transition: height 0.4s;
      background-color: ${props => props.theme.color.twitter};
      top: 0;
      left: 100%;
      position: absolute;
    }
  }
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.twitter};
    text-decoration: none;
    p {
      padding-right: ${props => props.theme.spacing.xs};
    }
  }
`;

export default SocialItem;
