import React, { FunctionComponent } from 'react';

export type FallBackUIProps = {
    title: string,
  }

export interface errorProps { 
    fallbackUI: FunctionComponent<FallBackUIProps>
    title: string
};

export interface errorState { hasError: boolean };
