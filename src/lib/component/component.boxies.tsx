import React, { FC } from "react";
import styled from 'styled-components';

import { LayoutElement } from '../layout';
import { RESPONSIVE } from './component.theme';

interface Props {
  title?: string
  color?: string
};

export const ComponentBoxies: FC<Props> = ({ title, color = 'white' }) => { 
  
  const Container = styled(LayoutElement)`
    padding-top: 30px;
    background-color: ${color};
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  `;

  const BoxiesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 30px;
    @media (max-width: ${RESPONSIVE.BOXIES_CONTAINER[1275].WIDTH}) {
      flex-wrap: ${RESPONSIVE.BOXIES_CONTAINER[1275].FLEX_WRAP};
      justify-content: center;
    }
  `;

  const RootBoxiesContainer = styled(BoxiesContainer)`
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  return (
    <Container>
      { title && (<TitleText>{ title }</TitleText>) }
      <RootBoxiesContainer>
        <BoxiesContainer>
          <Box />
          <Box />
        </BoxiesContainer>
        <BoxiesContainer>
          <Box />
          <Box />
        </BoxiesContainer>
      </RootBoxiesContainer>
    </Container>
  );
}

const TitleText = styled.p`
  font-size: 25px;
`;

const Box = styled.div`
  background-color: #f0f9ff;
  height: 300px;
  width: 300px;
`;