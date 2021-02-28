import React from 'react';
import { GeneralError, GeneralErrorUI } from './src/ErrorBoundaries'
import  { 
  AuthContainer
} from './src/layouts'


export default function App() {

  return (
    <GeneralError title="Something went wrong" fallbackUI={GeneralErrorUI} >
      <>
       <AuthContainer/>
      </>
    </GeneralError>
  );
  
}
