import React, { FC } from "react";
import styled from 'styled-components';

import { TRouteNavButton } from './component.type';
import { ComponentNavButton } from './component.nav-button';

interface Props {
  navs: TRouteNavButton[]
};

export const ComponentNavBar: FC<Props> = ({ navs }) => (
  <Navbar>
    { navs.map((nav, index) => <ComponentNavButton key={`${nav.NAME}-${index}`} nav={nav} />) }
  </Navbar>
);

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
`;