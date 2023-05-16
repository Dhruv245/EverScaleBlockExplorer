"use client";

import React, { createContext, ReactNode, useState } from "react";

export type ChainContextType = {
  chain: Chain;
  setChain: React.Dispatch<React.SetStateAction<Chain>>;
};

const Context = createContext<ChainContextType | undefined>(undefined);

type Child = {
  children: ReactNode;
};

export enum Chain {
  Mainnet = "Mainnet",
  Devnet = "Devnet",
}

const ChainContext = ({ children }: Child) => {
  const [chain, setChain] = useState<Chain>(Chain.Mainnet);

  return (
    <Context.Provider value={{ chain, setChain }}>{children}</Context.Provider>
  );
};

export { ChainContext, Context };
