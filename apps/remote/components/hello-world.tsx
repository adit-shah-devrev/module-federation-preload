import React from 'react';
import { useNameContext } from '@module-federation-preload/contexts';

export const HelloWorld = () => {
  const { name } = useNameContext();
  console.log('useNameContext', name);

  return <div>Hello World from {name}</div>;
};

export default HelloWorld;
