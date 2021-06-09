import React, { FC } from 'react';

import { DescriptionContainer } from './description.container';
import { LayoutPage } from '../../lib/layout';

export const DescriotionPage: FC = () => {
  return (
    <LayoutPage>
      <DescriptionContainer />
    </LayoutPage>
  );
};