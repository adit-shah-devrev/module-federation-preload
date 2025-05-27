import React from 'react';
import { useNameContext } from '@module-federation-preload/contexts';

export const HelloWorld = () => {
  const { name } = useNameContext();
  return <div>Hello World from {name}</div>;
  // return <div>Hello World</div>;
};
