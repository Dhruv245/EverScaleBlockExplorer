"use client";

import React, { FC, ReactElement, useContext } from "react";
import Logo from "./Logo";
import { TypographyLarge } from "./Typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Chain, ChainContextType, Context } from "@/context/ChainContext";
import { useRouter } from "next/navigation";
import Search from "./Search";
import Link from "next/link";

type Props = {};

const Header: FC<Props> = (props): ReactElement => {
  const context = useContext<ChainContextType | undefined>(Context);
  const router = useRouter();

  return (
    <nav className="flex py-4 gap-2 w-full flex-col md:flex-row">
      <div className="flex flex-1">
        <div className="flex gap-2 items-center">
          <Link href={"/"} className="flex gap-2 items-center">
          <Logo />
          <TypographyLarge>Everscale Explorer</TypographyLarge>
          </Link>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="md:flex flex-1 hidden">
            <Search />
          </div>
          <div>
            <Select
              onValueChange={(value: Chain) => {
                context?.setChain(value);
                router.push("/");
              }}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder="Network"
                  defaultValue={Chain.Mainnet}
                />
                <SelectContent>
                  <SelectItem value={Chain.Mainnet}>Mainnet</SelectItem>
                  <SelectItem value={Chain.Devnet}>Devnet</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </div>
      <br></br>
      <div className="md:hidden flex-1">
        <Search />
      </div>
    </nav>
  );
};

export default Header;
