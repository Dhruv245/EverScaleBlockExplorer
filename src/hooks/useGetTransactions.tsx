import { GetLatestTransactionsQuery } from "@/__generated__/graphql";
import { GetLatestTransactions } from "@/graphql/GetLatestTransactions";
import { GetNextTransactions } from "@/graphql/GetNextTransactions";
import { GetPreviousTransactions } from "@/graphql/GetPreviousTransactions";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const useGetTransactions = () => {
  const [tableData, setTableData] = useState<GetLatestTransactionsQuery>();
  const [loading, setLoading] = useState<boolean>(true);

  const { data: currentData, error: currentDataError, loading: currentDataLoading } = useQuery(GetLatestTransactions);

  const [getNextData, { data: nextData, loading: nextDataLoading, error: nextDataError }] = useLazyQuery(GetNextTransactions);
  const [getPreviousData, { data: previousData, loading: previousDataLoading, error: previousDataError }] = useLazyQuery(GetPreviousTransactions);

  useEffect(() => {
    if (currentData) {
      setTableData(currentData);
      setLoading(currentDataLoading);
    }
  }, [currentData, currentDataLoading]);

  useEffect(() => {
    if (nextData) {
      setTableData(nextData);
      setLoading(nextDataLoading);
    }
  }, [nextData, nextDataLoading]);

  useEffect(() => {
    if (previousData) {
      setTableData(previousData);
      setLoading(previousDataLoading);
    }
  }, [previousData, previousDataLoading]);

  const handleGetPreviousTransactionsData = async () => {
    setLoading(true);
    await getPreviousData({
      variables: {
        before: tableData?.blockchain?.transactions?.pageInfo.startCursor!,
      },
    });
  };

  const handleGetNextTransactionData = async () => {
    setLoading(true);
    await getNextData({
      variables: {
        after: tableData?.blockchain?.transactions?.pageInfo.endCursor!,
      },
    });
  };

  useEffect(() => {
    if (currentData && !tableData) {
      setTableData(currentData);
      setLoading(currentDataLoading);
    }
  }, [currentData, currentDataLoading, tableData]);

  return { tableData, loading, handleGetPreviousTransactionsData, handleGetNextTransactionData };
};

export default useGetTransactions;
