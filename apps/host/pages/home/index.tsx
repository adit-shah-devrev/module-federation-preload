// @ts-expect-error-next-line
import { HelloWorld } from 'remote/hello-world';
import {
  AccordionComponent,
  NameContextProvider,
} from '@module-federation-preload/contexts';

export function Home() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <NameContextProvider name="remote">
      <HelloWorld />
      <AccordionComponent name="host" />
    </NameContextProvider>
  );
}

export default Home;
