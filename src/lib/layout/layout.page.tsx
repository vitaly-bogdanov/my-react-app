import React, { FC } from "react";
import styled from 'styled-components';

import { LayoutSection } from './layout.section';
import { ComponentNavBar } from '../component';
import { DESCRIPTION_ROUTE } from '../../core/description';
import { DELIVERY_AND_PAYMENT_ROUTE } from '../../core/deliveryAndPayment';
import { WHY_DIVAN_RU_ROUTE } from '../../core/whyDivanRu';

export const LayoutPage: FC = ({ children }) => (
  <>
    <header>
      <EmptyContainer/>
      <NavbarContainer>
        <LayoutSection>
          <ComponentNavBar navs={[
            DESCRIPTION_ROUTE,
            DELIVERY_AND_PAYMENT_ROUTE,
            WHY_DIVAN_RU_ROUTE
          ]} />
        </LayoutSection>
      </NavbarContainer>
    </header>
    <Main>
      { children }
    </Main>
    <Footer>
      
    </Footer>
  </>
);

const EmptyContainer = styled.div`
  background-color: #f0f9ff;
  height: 400px;
`;

const NavbarContainer = styled.div`
  background-color: #ffffff;
`;

const Main = styled.main`
  background-color: #efefef;
`;

const Footer = styled.footer`
  height: 400px;
  background-color: #ffffff;
`;

