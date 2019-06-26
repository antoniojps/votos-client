import React from 'react';
import { Logo } from 'components/atoms';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <Nav.Start>
        <Link to="/">
          <Logo hasText />
        </Link>
      </Nav.Start>
      <Nav.List>
        <NavLink to="/parties">Partidos políticos</NavLink>
        <NavLink to="/legislativas/infograficos/historia">Infográficos</NavLink>
      </Nav.List>
    </Nav>
  );
};

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

const NavLink = ({ children, ...props }) => (
  <Link {...props} activeClassName="active" partiallyActive>
    {children}
  </Link>
);

Nav.Start = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.color.base};
  }
`;

Nav.List = styled.div`
  a {
    display: inline;
    padding: ${props => props.theme.spacing.xxms};
    text-decoration: none;
    color: ${props => props.theme.color.baseLighter};
    transition: color 0.2s ease 0s;
    &.active {
      color: ${props => props.theme.color.base};
    }
    &:hover {
      color: ${props => props.theme.color.base};
    }
  }
`;

export default Navigation;
