"use client";
import { FC, ReactElement } from "react";
import {
  TypographyH3,
  TypographyMutedH3,
  TypographyTd,
  TypographyTr,
} from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import { GetAccountDetails } from "@/graphql/GetAccountDetails";
import ClipboardCopyButton from "../../../../components/custom/ClipBoardCopy";
import Loading from "../../../../components/custom/Loading";
import Error from "../../../../components/custom/Error";

type Props = {
  params: {
    address: string;
  };
};

const Account: FC<Props> = ({ params }): ReactElement => {
  const { data, error, loading } = useQuery(GetAccountDetails, {
    variables: { address: params.address.replace("%3A", ":") },
  });

  if (!data) {
    return <Loading />;
  }

  if (!data.blockchain?.account){
    return <Error />
  }

  console.log(data)

  const fields = [
    "Account",
    "Ever Balance",
    "BOC",
    "Code Hash",
    "Code",
    "Account Type",
    "Data Hash",
    "Code Hash",
  ];

  const values = [
    data.blockchain?.account?.info?.id.toString().replace("account/", ""),
    parseInt(data.blockchain?.account?.info?.balance?.toString()!) / 10 ** 9,
    data.blockchain?.account?.info?.boc?.toString().slice(0, 8) +
      "..." +
      data.blockchain?.account?.info?.boc?.toString().slice(-8),
    data.blockchain?.account?.info?.code_hash?.toString().slice(0, 8) +
      "..." +
      data.blockchain?.account?.info?.code_hash?.toString().slice(-8),
    data.blockchain?.account?.info?.code?.toString().slice(0, 8) +
      "..." +
      data.blockchain?.account?.info?.code?.toString().slice(-8),
    data.blockchain?.account?.info?.acc_type_name,
    data.blockchain?.account?.info?.data_hash,
    data.blockchain?.account?.info?.code_hash,
  ];

  const actualValues = [
    data.blockchain?.account?.info?.id.toString(),
    parseInt(data.blockchain?.account?.info?.balance?.toString()!) / 10 ** 9,
    data.blockchain?.account?.info?.boc?.toString(),
    data.blockchain?.account?.info?.code_hash?.toString(),
    data.blockchain?.account?.info?.code?.toString(),
    data.blockchain?.account?.info?.acc_type_name,
    data.blockchain?.account?.info?.data_hash,
    data.blockchain?.account?.info?.code_hash,
  ];
  return (
    <section>
      <div className="flex gap-2 items-center mt-4">
        <TypographyH3>Address:</TypographyH3>
        <TypographyMutedH3>
          {params.address.replace("%3A", ":").slice(0, 5) +
            "..." +
            params.address.replace("%3A", ":").slice(-5)}
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
      <br></br>
    </section>
  );
};

export default Account;
