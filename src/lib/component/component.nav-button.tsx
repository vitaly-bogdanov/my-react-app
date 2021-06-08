import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { TRouteNavButton } from './component.type';

interface Props {
  nav: TRouteNavButton
};

export const ComponentNavButton: FC<Props> = ({ nav }) => (
  <NavButton to={nav.PATH} exact={nav.EXACT}>
    <NavButtonTextContainer>{nav.NAME}</NavButtonTextContainer>
  </NavButton>
);

const NavButton = styled(NavLink)`
  display: flex;
  align-items: center;;
  height: 100%;
  color: black;
  text-decoration: none;
  font-size: 25px;
`;

const NavButtonTextContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;