import React, { useContext, createContext } from 'react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const test = 1;

  return (
    <StateContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
