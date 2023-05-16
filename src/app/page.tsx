"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import useGetBasicData from "@/hooks/useGetBasicData";
import InfoCard from "../../components/custom/InfoCard";
import CurrencyInfoCard from "../../components/custom/CurrencyInfoCard";
import useGetTransactions from "@/hooks/useGetTransactions";
import {
  TypographyH3,
  TypographyTd,
  TypographyTh,
  TypographyTr,
} from "../../components/custom/Typography";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Loading from "../../components/custom/Loading";

export default function Home() {
  const tableHeadings = [
    "Block Id",
    "Transaction Id",
    "Account",
    "Workchain Id",
  ];
  const { data } = useGetBasicData();
  const {
    tableData: latestTransactionsData,
    handleGetNextTransactionData,
    handleGetPreviousTransactionsData,
  } = useGetTransactions();

  if (!data) {
    return <Loading />;
  }

  if (!latestTransactionsData) {
    return <Loading />;
  }

  return (
    <>
      <section>
        {/* chain basic info */}
        <div className="rounded-lg py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <InfoCard
              itemName={"Total Transactions"}
              value={data?.statistics?.transactions?.totalCount}
            />

            <InfoCard
              itemName={"Total Validators"}
              value={data.statistics.validators.totalCount}
            />

            <InfoCard
              itemName={"Total Active Depools"}
              value={data.statistics.depools.activeDepoolCount}
            />
            <InfoCard
              itemName={"TPS"}
              value={data.statistics.transactions.ratePerSecond}
            />

            <CurrencyInfoCard
              itemName="Ever MarketCap"
              value={data.price.marketCap.usd}
            />
          </div>
        </div>

        <br />
        <TypographyH3>Transactions</TypographyH3>
        <br />

        <div>
          <div className="relative overflow-x-auto rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <TypographyTr>
                  {tableHeadings.map((h, k) => (
                    <TypographyTh key={k}>{h}</TypographyTh>
                  ))}
                </TypographyTr>
              </thead>
              <tbody>
                {latestTransactionsData.blockchain?.transactions?.edges.map(
                  (i, k) => {
                    const array = [
                      i.node.block_id,
                      i.node.id,
                      i.node.account?.address,
                      i.node.workchain_id,
                    ];
                    return (
                      <TypographyTr key={k}>
                        {array.map((j, k2) => {
                          return (
                            <TypographyTd key={k2}>
                              <Link
                                href={
                                  j == i.node.account?.address
                                    ? "/account/" + j
                                    : j == i.node.id
                                    ? "/transaction/" +
                                      j.toString().replace("transaction/", "")
                                    : j == i.node.block_id
                                    ? "/block/" + j
                                    : "#"
                                }
                              >
                                <Button variant={"link"}>
                                  {j
                                    ? j != i.node.workchain_id
                                      ? j
                                          ?.toString()
                                          .replace("transaction/", "")
                                          .slice(0, 5) +
                                        "..." +
                                        j
                                          ?.toString()
                                          .replace("transaction/", "")
                                          .slice(-5)
                                      : j
                                    : "NA"}
                                </Button>
                              </Link>
                            </TypographyTd>
                          );
                        })}
                      </TypographyTr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        <br />
        {/* Next and previus page buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleGetPreviousTransactionsData}
            disabled={
              !latestTransactionsData.blockchain?.transactions?.pageInfo
                .hasPreviousPage
            }
          >
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button
            variant="outline"
            onClick={handleGetNextTransactionData}
            disabled={
              !latestTransactionsData.blockchain?.transactions?.pageInfo
                .hasNextPage
            }
          >
            Next
            <ChevronRightIcon className="mr-2 h-4 w-4" />
          </Button>
        </div>
        <br />
      </section>
    </>
  );
}
