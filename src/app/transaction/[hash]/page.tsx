"use client";
import { FC, ReactElement, useState } from "react";
import {
  TypographyH3,
  TypographyLarge,
  TypographyMutedH3,
  TypographyTd,
  TypographyTr,
} from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import ClipboardCopyButton from "../../../../components/custom/ClipBoardCopy";
import { GetTransactionData } from "@/graphql/GetTransactionData";
import Loading from "../../../../components/custom/Loading";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import Link from "next/link";
import Error from "../../../../components/custom/Error"

type Props = {
  params: {
    hash: string;
  };
};


const Account: FC<Props> = ({ params }): ReactElement => {
  const { data, loading, error } = useQuery(GetTransactionData, {
    variables: { hash: params.hash },
  });

  if (!data) {
    return <Loading />;
  }

  if(!data.blockchain?.transaction){
    return <Error />
  }

  console.log(error)

  const fields = [
    "Id",
    "Block Id",
    "Logical Time",
    "Destoryed",
    "aborted",
    "Boc",
    "New Hash",
    "Old Hash",
    "Total Fees",
  ];


  const values = [
    data.blockchain?.transaction?.id.toString().replace("transaction/", ""),
    data.blockchain?.transaction?.block_id,
    parseInt(data.blockchain?.transaction?.lt?.toString()!),
    data.blockchain?.transaction?.destroyed ? "True" : "False",
    data.blockchain?.transaction?.aborted ? "True" : "False",
    data.blockchain?.transaction?.boc?.toString().slice(0, 8) +
    "..." +
    data.blockchain?.transaction?.boc?.toString().slice(-8),
    data.blockchain?.transaction?.new_hash,
    data.blockchain?.transaction?.old_hash,
    parseInt(data.blockchain?.transaction?.total_fees?.toString()!) / 10 ** 9,
  ];

  const actualValues = [
    data.blockchain?.transaction?.id.toString().replace("transaction/", ""),
    data.blockchain?.transaction?.block_id,
    parseInt(data.blockchain?.transaction?.lt?.toString()!),
    data.blockchain?.transaction?.destroyed ? "True" : "False",
    data.blockchain?.transaction?.aborted ? "True" : "False",
    data.blockchain?.transaction?.boc,
    data.blockchain?.transaction?.new_hash,
    data.blockchain?.transaction?.old_hash,
    parseInt(data.blockchain?.transaction?.total_fees?.toString()!) / 10 ** 9,
  ];

  console.log(data)

  return (
    <section>
      <div className="flex gap-2 items-center mt-4">
        <TypographyH3>Transaction:</TypographyH3>
        <TypographyMutedH3>
          {params.hash.slice(0, 3) + "..." + params.hash.slice(-3)}
        </TypographyMutedH3>
      </div>

      <br />
      <div className="relative overflow-x-auto rounded-sm">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            {fields.map((f, i) => {
              return (
                <TypographyTr key={i}>
                  <TypographyTd>{f}</TypographyTd>
                  <TypographyTd>
                    <div className="flex items-center justify-between group">
                      <span className="cursor-pointer">{values[i]}</span>{" "}
                      <span className="hidden group-hover:block absolute right-3">
                        <ClipboardCopyButton
                          text={actualValues[i]?.toString()!}
                        />
                      </span>
                    </div>
                  </TypographyTd>
                </TypographyTr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <Tabs defaultValue="Message" className="w-full">
          <div className="w-full max-w-full overflow-auto scrollbar-hidden">
          <TabsList>
            <TabsTrigger value="Message">Message</TabsTrigger>
            <TabsTrigger value="Transaction Operation">Transaction Operation</TabsTrigger>
            <TabsTrigger value="compute">Compute</TabsTrigger>
            <TabsTrigger value="action">Action</TabsTrigger>
            <TabsTrigger value="credit">Credit</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
          </TabsList>
          </div>
          <TabsContent value="Message">
            <br />
            <TypographyLarge>Incoming Messages</TypographyLarge>
            <br />
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <TypographyTr>
                    {["hash", "From", "To", "Value", "Created At"].map(
                      (item, key) => {
                        return <TypographyTd key={key}>{item}</TypographyTd>;
                      }
                    )}
                  </TypographyTr>
                </thead>
                <tbody>
                  {data.blockchain?.transaction?.in_message ?
                    <TypographyTr>
                      <TypographyTd>
                        <Link
                          href={"/message/" + data.blockchain?.transaction?.in_message?.hash?.toString()}
                          className="hover:underline underline-offset-2"
                        >
                          {data.blockchain?.transaction?.in_message?.hash?.toString().slice(0, 5) + "..." + data.blockchain?.transaction?.in_message?.hash?.toString().slice(-5)}
                        </Link>
                      </TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/account/" + data.blockchain?.transaction?.in_message?.src?.toString()}
                          className="hover:underline underline-offset-2"
                        >
                          {data.blockchain?.transaction?.in_message?.src?.toString().slice(0, 5) + "..." + data.blockchain?.transaction?.in_message?.src?.toString().slice(-5)}
                        </Link>
                      </TypographyTd>
                      <TypographyTd>
                        <Link
                          href={"/account/" + data.blockchain?.transaction?.in_message?.dst?.toString()}
                          className="hover:underline underline-offset-2"
                        >
                          {data.blockchain?.transaction?.in_message?.dst?.toString().slice(0, 5) + "..." + data.blockchain?.transaction?.in_message?.dst?.toString().slice(-5)}
                        </Link>
                      </TypographyTd>
                      <TypographyTd>
                        {parseInt(data.blockchain?.transaction?.in_message?.value?.toString()!) / 10 ** 9} Ever
                      </TypographyTd>
                      <TypographyTd>
                        {data.blockchain?.transaction?.in_message?.created_at_string}
                      </TypographyTd>
                    </TypographyTr>
                    :
                    <TypographyTr>
                      <TypographyTd>
                        No Messages
                      </TypographyTd>
                    </TypographyTr>
                  }
                </tbody>
              </table>
            </div>

            <br />
            <TypographyLarge>Outgoing Messages</TypographyLarge>
            <br />

            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <TypographyTr>
                    {["hash", "From", "To", "Value", "Created At"].map(
                      (item, key) => {
                        return <TypographyTd key={key}>{item}</TypographyTd>;
                      }
                    )}
                  </TypographyTr>
                </thead>
                <tbody>
                  {data.blockchain?.transaction?.out_messages && data.blockchain.transaction.out_messages.length > 0 ? data.blockchain?.transaction?.out_messages?.map((f, i) => {
                    const accountFields = [
                      f?.hash?.toString().slice(0, 6) + "..." + f?.hash?.toString().slice(-5),
                      f?.src?.toString().slice(0, 6) + "..." + f?.src?.toString().slice(-5),
                      f?.dst?.toString().slice(0, 6) + "..." + f?.dst?.toString().slice(-5),
                      parseInt(f?.value?.toString()!) / 10 ** 9,
                      f?.created_at_string
                    ];
                    return (
                      <TypographyTr key={i}>
                        <TypographyTd>
                          <Link
                            href={"/message/" + f?.hash?.toString()}
                            className="hover:underline underline-offset-2"
                          >
                            {accountFields[0]}
                          </Link>
                        </TypographyTd>
                        <TypographyTd>
                          <Link
                            href={"/account/" + f?.src?.toString()}
                            className="hover:underline underline-offset-2"
                          >
                            {accountFields[1]}
                          </Link>
                        </TypographyTd>
                        <TypographyTd>
                          <Link
                            href={"/account/" + f?.dst?.toString()}
                            className="hover:underline underline-offset-2"
                          >
                            {accountFields[2]}
                          </Link>
                        </TypographyTd>
                        <TypographyTd>{accountFields[3]}</TypographyTd>
                        <TypographyTd>{accountFields[4]}</TypographyTd>
                      </TypographyTr>
                    );
                  })
                    :
                    <TypographyTr>
                      <TypographyTd>No Messages</TypographyTd>
                    </TypographyTr>
                  }
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="Transaction Operation">
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                  {data.blockchain?.transaction?.tokenTransfer ? [
                    data.blockchain?.transaction?.tokenTransfer?.fromWallet?.holder?.address,
                    data.blockchain?.transaction?.tokenTransfer?.toWallet?.holder?.address,
                    parseInt(data.blockchain?.transaction?.tokenTransfer?.value?.toString()!) / (10 ** parseInt(data.blockchain?.transaction?.tokenTransfer?.token?.decimals?.toString()!)),
                    data.blockchain?.transaction?.tokenTransfer?.token?.symbol
                  ].map((f, i) => {
                    const valueFlowFields = [
                      "From",
                      "To",
                      "Value",
                      "Symbol"
                    ];
                    return (
                      <TypographyTr key={i}>
                        <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                        <TypographyTd>{f}</TypographyTd>
                      </TypographyTr>
                    );
                  })
                    :
                    <TypographyTr>
                      <TypographyTd>Nothing to show here</TypographyTd>
                    </TypographyTr>
                  }
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="compute">
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                {[
                  data.blockchain?.transaction?.compute?.compute_type,
                  data.blockchain?.transaction?.compute?.compute_type_name,
                  data.blockchain?.transaction?.compute?.account_activated ? "True" : "False",
                  data.blockchain?.transaction?.compute?.exit_code,
                  data.blockchain?.transaction?.compute?.gas_credit,
                  data.blockchain?.transaction?.compute?.gas_fees,
                  data.blockchain?.transaction?.compute?.gas_limit,
                  data.blockchain?.transaction?.compute?.gas_used,
                  data.blockchain?.transaction?.compute?.mode,
                  data.blockchain?.transaction?.compute?.msg_state_used ? "True" : "False",
                  data.blockchain?.transaction?.compute?.success ? "True" : "False"
                ].map((f, i) => {
                  const valueFlowFields = [
                    "Compute Type",
                    "Compute Type Name",
                    "Account activated",
                    "Exit Code",
                    "Gas Credit",
                    "Gas Fee",
                    "Gas Limit",
                    "Gas Used",
                    "Mode",
                    "Message State Used",
                    "Success"
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                      <TypographyTd>{f != null ? f : "NA"}</TypographyTd>
                    </TypographyTr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="action">
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                {[
                  data.blockchain?.transaction?.action?.action_list_hash,
                  data.blockchain?.transaction?.action?.msgs_created,
                  data.blockchain?.transaction?.action?.no_funds ? "True" : "False",
                  data.blockchain?.transaction?.action?.result_code,
                  data.blockchain?.transaction?.action?.skipped_actions,
                  data.blockchain?.transaction?.action?.spec_actions,
                  data.blockchain?.transaction?.action?.status_change,
                  data.blockchain?.transaction?.action?.status_change_name,
                  data.blockchain?.transaction?.action?.success ? "True" : "False",
                  data.blockchain?.transaction?.action?.valid ? "True" : "False",
                ].map((f, i) => {
                  const valueFlowFields = [
                    "Action List Hash",
                    "Messages Created",
                    "No funds",
                    "Result Code",
                    "Skipped actions",
                    "Special Actions",
                    "Status change",
                    "Status change name",
                    "Sucesss",
                    "valid"
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                      <TypographyTd>{f != null? f : "NA"}</TypographyTd>
                    </TypographyTr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="credit">
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                {[
                  parseInt(data.blockchain?.transaction?.credit?.credit?.toString()!),
                  data.blockchain?.transaction?.credit?.due_fees_collected
                ].map((f, i) => {
                  const valueFlowFields = [
                    "Credit",
                    "Due Fees Collected"
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                      <TypographyTd>{f != null ? f : "NA"}</TypographyTd>
                    </TypographyTr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="storage">
            <div className="relative overflow-x-auto rounded-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                {[
                  data.blockchain?.transaction?.storage?.status_change_name,
                  data.blockchain?.transaction?.storage?.storage_fees_due,
                  parseInt(data.blockchain?.transaction?.storage?.storage_fees_collected?.toString()!),
                ].map((f, i) => {
                  const valueFlowFields = [
                    "Status Change Name",
                    "Storage Fees due",
                    "Storage Fees collected"
                  ];
                  return (
                    <TypographyTr key={i}>
                      <TypographyTd>{valueFlowFields[i]}</TypographyTd>
                      <TypographyTd>{f != null ? f : "NA"}</TypographyTd>
                    </TypographyTr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <br />
    </section>
  );
};

export default Account;
