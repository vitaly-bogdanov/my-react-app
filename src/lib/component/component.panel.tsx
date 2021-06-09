import React, { FC } from "react";
import styled from 'styled-components';

import { LayoutElement } from '../layout';

export const ComponentPanel: FC = () => (
  <LayoutElement>
    <Panel>
      <Head />
      <Line />
      <Body />
    </Panel>
  </LayoutElement>
);

const Panel = styled.div`
  order: 1;
  transform: translateY(-120px);
  box-shadow: 0 0 15px 10px rgba(122,122,122,0.5);
`;

const Head = styled.div`
  background-color: #f1e67f;
  height: 100px;
`;

const Line = styled.div`
  height: 40px;
  background-color: #efefef;
`;

const Body = styled.div`
  height: 500px;
  background-color: white;
`;