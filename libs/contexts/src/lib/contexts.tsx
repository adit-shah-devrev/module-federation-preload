import { createContext, useContext } from 'react';

interface NameContextType {
  name: string;
}

const NameContext = createContext<NameContextType>({
  name: 'host',
});

export const NameContextProvider = (props: {
  children: React.ReactNode;
  name: string;
}) => {
  console.log('NameContextProvider', props.name);
  return (
    <NameContext.Provider value={{ name: props.name }}>
      {props.children}
    </NameContext.Provider>
  );
};

export const useNameContext = () => {
  return useContext(NameContext);
};
