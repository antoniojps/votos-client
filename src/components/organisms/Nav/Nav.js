import React from 'react';
import { Logo } from 'components/atoms';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

const Nav = styled.nav`
  background-color: red;
`;

export default Navigation;
