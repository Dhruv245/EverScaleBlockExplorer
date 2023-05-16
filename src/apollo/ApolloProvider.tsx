"use Client";
import React, { ReactNode, useContext } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Chain, Context } from "../context/ChainContext";

interface Props {
  children: ReactNode;
}

const ApolloProviderWrapper = ({ children }: Props) => {
  const context = useContext(Context);

  const client = new ApolloClient({
    uri:
      context?.chain == Chain.Mainnet
        ? process.env.NEXT_PUBLIC_EVERCLOUD_MAINNET_URL!
        : process.env.NEXT_PUBLIC_EVERCLOUD_DEVNET_URL!,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
