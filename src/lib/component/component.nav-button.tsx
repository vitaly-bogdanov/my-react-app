import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { TRouteNavButton } from './component.type';
import { RESPONSIVE } from './component.theme';

interface Props {
  nav: TRouteNavButton
};

export const ComponentNavButton: FC<Props> = ({ nav }) => (
  <NavButton to={nav.PATH} exact={nav.EXACT} activeStyle={{ backgroundColor: '#efefef' }}>
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
  @media (max-width: ${RESPONSIVE.NAV_BUTTON[1020].WIDTH}) {
    font-size: ${RESPONSIVE.NAV_BUTTON[1020].FONT_SIZE};
  }
  @media (max-width: ${RESPONSIVE.NAV_BUTTON[805].WIDTH}) {
    font-size: ${RESPONSIVE.NAV_BUTTON[805].FONT_SIZE};
  }
`;

const NavButtonTextContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[1020].WIDTH}) {
    padding-left: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[1020].PADDING_LEFT};
    padding-right: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[1020].PADDING_RIGHT};
  }
  @media (max-width: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[805].WIDTH}) {
    padding-left: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[805].PADDING_LEFT};
    padding-right: ${RESPONSIVE.NAV_BUTTON_TEXT_CONTAINER[805].PADDING_RIGHT};
  }
`;