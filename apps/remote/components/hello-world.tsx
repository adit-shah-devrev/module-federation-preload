import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionComponent,
  useNameContext,
} from '@module-federation-preload/contexts';

export function HelloWorld() {
  const { name } = useNameContext();

  console.log('useNameContext', name);

  return <AccordionComponent name={name} />;
}

export default HelloWorld;
