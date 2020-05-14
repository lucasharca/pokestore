import React, { createContext, useCallback, useContext } from 'react';

const ChangeContext = createContext();

export function ChangeProvider({ children, chooseTheme }) {
  const changeStore = function(type) {
    chooseTheme(type);
  };

  return (
    <ChangeContext.Provider value={{ changeStore }}>
      {children}
    </ChangeContext.Provider>
  );
}

export function useChange() {
  const context = useContext(ChangeContext);
  return context;
}
