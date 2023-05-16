"use client";

import { FC, ReactElement } from "react";
import {
  TypographyH3,
  TypographyTd,
  TypographyTr,
} from "../../../../components/custom/Typography";
import { useQuery } from "@apollo/client";
import { GetMessageData } from "@/graphql/GetMessageData";
import Loading from "../../../../components/custom/Loading";
import ClipboardCopyButton from "../../../../components/custom/ClipBoardCopy";
import Error from "../../../../components/custom/Error";

type PageParams = {
  params: {
    Id: string;
  };
};

const Message: FC<PageParams> = ({ params }): ReactElement => {
  const { data, loading, error } = useQuery(GetMessageData, {
    variables: { hash: params.Id! },
  });

  console.log(data);

  if (!data) {
    return <Loading />;
  }

  if(!data.blockchain?.message){
    return <Error />
  }

  const values = [
    data.blockchain?.message?.id.toString().replace("message/", ""),
    data.blockchain?.message?.hash,
    data.blockchain?.message?.src,
    data.blockchain?.message?.dst,
    data.blockchain?.message?.created_at_string,
    data.blockchain?.message?.status_name,
    data.blockchain?.message?.msg_type_name,
    data.blockchain?.message?.bounced ? "True" : "False",
  ];

  const actualValues = [
    data.blockchain?.message?.id.toString().replace("message/", ""),
    data.blockchain?.message?.hash,
    data.blockchain?.message?.src,
    data.blockchain?.message?.dst,
    data.blockchain?.message?.created_at_string,
    data.blockchain?.message?.status_name,
    data.blockchain?.message?.msg_type_name,
    data.blockchain?.message?.bounced ? "True" : "False",
  ];

  const fields = [
    "Id",
    "Hash",
    "From",
    "To",
    "Created At",
    "Status",
    "Message Type",
    "Bounced",
  ];
  return (
    <section>
      <TypographyH3>
        Message{" "}
        {params.Id.toString().slice(0, 5) +
          "..." +
          params.Id.toString().slice(-5)}
      </TypographyH3>
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
    </section>
  );
};

export default Message;
