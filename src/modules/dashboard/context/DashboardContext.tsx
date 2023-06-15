import { createContext, Dispatch, SetStateAction, useState } from "react";
import * as React from "react";

export interface DashboardContextProps {
  module: string;
  setModule: Dispatch<SetStateAction<string>>;
}

interface DashboardContextProviderProps {
  children: React.ReactNode;
}

export const DashboardContext = createContext<DashboardContextProps | null>(
  null
);

export const DashboardContextProvider = ({
  children,
}: DashboardContextProviderProps) => {
  const [module, setModule] = useState("pokemons");

  return (
    <DashboardContext.Provider value={{ module, setModule }}>
      {children}
    </DashboardContext.Provider>
  );
};
