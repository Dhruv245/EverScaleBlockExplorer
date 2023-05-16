"use client";

import React, { FC, ReactElement } from "react";
import { TypographyH3, TypographyMuted } from "./Typography";
import numeral from "numeral";

type Props = {
  itemName: string | undefined;
  value: BigInt | number | undefined;
};

const CurrencyInfoCard: FC<Props> = ({
  itemName = "Item",
  value = "value",
}): ReactElement => {
  const MyNumeral = numeral(value).format("$ 0.0a");
  return (
    <div className="border-[1px] px-4 py-4 rounded-md overflow-hidden  flex items-center">
      <div>
        <TypographyMuted>{itemName}</TypographyMuted>
        <div className="flex gap-2 items-end">
          <TypographyH3>{MyNumeral}</TypographyH3>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfoCard;
