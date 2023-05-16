import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetNetworkInfoQuery } from "@/graphql/GetNetworkInfo";
interface Statistics {
  transactions: {
    totalCount: number;
    lastDayCount: number;
    ratePerSecond: number;
    totalOrdinaryCount: number;
    lastDayOrdinaryCount: number;
  };
  accounts: {
    totalActiveCount: number;
    totalCount: number;
  };
  depools: {
    activeDepoolCount: number;
  };
  validators: {
    totalCount: number;
  };
}

interface Price {
  marketCap: {
    usd: number;
  };
}

interface Data {
  statistics: Statistics;
  price: Price;
}

const useGetBasicData = () => {
  
  const { data, error, loading } = useQuery(GetNetworkInfoQuery);

  return { data, error, loading };
};

export default useGetBasicData;
