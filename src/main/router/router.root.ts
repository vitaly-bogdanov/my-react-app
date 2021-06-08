import { TRoute } from './router.type';

import { DeliveryAndPaymentPage, DELIVERY_AND_PAYMENT_ROUTE } from '../../core/deliveryAndPayment';
import { WhyDivanRuPage, WHY_DIVAN_RU_ROUTE } from '../../core/whyDivanRu';
import { DescriotionPage, DESCRIPTION_ROUTE } from '../../core/description';

// ADD NEW ROUTES HERE ...
export const routes: TRoute[] = [
  { 
    path: DELIVERY_AND_PAYMENT_ROUTE.PATH, 
    exact: DELIVERY_AND_PAYMENT_ROUTE.EXACT, 
    Page: DeliveryAndPaymentPage 
  },
  {
    path: WHY_DIVAN_RU_ROUTE.PATH, 
    exact: WHY_DIVAN_RU_ROUTE.EXACT, 
    Page: WhyDivanRuPage 
  },
  {
    path: DESCRIPTION_ROUTE.PATH, 
    exact: DESCRIPTION_ROUTE.EXACT, 
    Page: DescriotionPage 
  },

  //...
];

export const defaultRedirectPath = DESCRIPTION_ROUTE.PATH;