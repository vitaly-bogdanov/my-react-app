import React, { FC } from "react";
import styled from 'styled-components';

import { LayoutSection } from './layout.section';
import { ComponentNavBar, ComponentBoxies, ComponentPanel } from '../component';
import { DESCRIPTION_ROUTE } from '../../core/description';
import { DELIVERY_AND_PAYMENT_ROUTE } from '../../core/deliveryAndPayment';
import { WHY_DIVAN_RU_ROUTE } from '../../core/whyDivanRu';

export const LayoutPage: FC = ({ children }) => (
  <>
    <header>
      <LayoutSection>
        <EmptyContainer/>
        <NavbarContainer>
          <ComponentNavBar navs={[
            DESCRIPTION_ROUTE,
            DELIVERY_AND_PAYMENT_ROUTE,
            WHY_DIVAN_RU_ROUTE
          ]} />
        </NavbarContainer>
      </LayoutSection>
    </header>
    <main>
      <LayoutSection>
        <ContentContainer>
          { children }
          <ComponentPanel />
        </ContentContainer>
      </LayoutSection>
    </main>
    <Footer>
      <LayoutSection>
        <ComponentBoxies />
      </LayoutSection>
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

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  min-height: 700px;
  background-color: #efefef;
`;

const Footer = styled.footer`
  background-color: #ffffff;
`;