import { createContext, useContext, useState } from "react";

const BuildContext = createContext();

export function useBuildContext() {
  return useContext(BuildContext);
}

export function BuildProvider({ children }) {
  const [state, setState] = useState({
    // Define your initial state here
    // Example: user: null,
  });

  // Define functions to update the state

  return (
    <BuildContext.Provider value={{ state, setState }}>
      {children}
    </BuildContext.Provider>
  );
}
