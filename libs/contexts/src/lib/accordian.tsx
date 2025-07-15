import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

export const AccordionComponent = ({ name }: { name: string }) => {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="text-left w-full font-medium">
            Greeting
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="pt-2 pl-4">
          Hello World from {name}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
