
import React from 'react';

const SignedContext = React.createContext({});

export const SignedProvider = SignedContext.Provider;
export const SignedConsumer = SignedContext.Consumer;

export default SignedContext;
