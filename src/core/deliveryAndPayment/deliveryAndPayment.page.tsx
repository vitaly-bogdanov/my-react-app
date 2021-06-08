import React, { FC } from 'react';

import { DeliveryAndPaymentContainer } from './deliveryAndPayment.container';
import { LayoutPage } from '../../lib/layout';

export const DeliveryAndPaymentPage: FC = () => {
  return (
    <LayoutPage>
      <DeliveryAndPaymentContainer />
    </LayoutPage>
  );
};