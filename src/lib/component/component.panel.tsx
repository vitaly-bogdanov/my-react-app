import React, { FC } from "react";
import styled from 'styled-components';

import { LayoutElement } from '../layout';

export const ComponentPanel: FC = () => (
  <LayoutPanel>
    <Panel>
      <Content>
        <Head />
        <Line />
        ...
      </Content>
    </Panel>
  </LayoutPanel>
);

const LayoutPanel = styled(LayoutElement)`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const Panel = styled.div`
  box-shadow: 0 0 15px 10px rgba(122,122,122,0.5);
  min-height: 680px;
  background-color: white;
`;

const Head = styled.div`
  background-color: #f1e67f;
  height: 100px;
`;

const Line = styled.div`
  height: 40px;
  background-color: #efefef;
`;

const Content = styled.div`
  transform: translateY(-120px);
`;