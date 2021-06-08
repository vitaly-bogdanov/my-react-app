import { FC, ComponentClass, FunctionComponent } from 'react';

export type TRoute = {
  path: string
  exact: boolean
  Page: FC | ComponentClass | FunctionComponent
};