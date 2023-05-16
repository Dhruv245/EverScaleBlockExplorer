import React, { useEffect, useRef, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { useLazyQuery } from "@apollo/client";
import { CheckHashTypes } from "@/graphql/CheckHashType";
import { TypographyP } from "./Typography";
import Link from "next/link";
import { useDebouncedCallback } from 'use-debounce';
import { usePathname } from "next/navigation";
import { CheckAccountExist } from "@/graphql/CheckAccountExist";

const Search = () => {
  const [type, setType] = useState("");
  const [hash, setHash] = useState("");
  const pathname = usePathname()
  const searchRef = useRef(null)

  const [checkType, { data, error }] = useLazyQuery(CheckHashTypes);
  const [checkAddressType, {data: AddressData} ] = useLazyQuery(CheckAccountExist)
  const debounced = useDebouncedCallback(
    makeCall,
    500
  );

  async function makeCall() {
    await checkType({ variables: { hash: hash } });
  }

  async function makeCallToAddressChecker(){
    await checkAddressType({variables: {address: hash}})
  }

  function checkChange() {
    if (data)
      if (data?.blockchain?.block) {
        setType("block");
      } else if (data?.blockchain?.message) {
        setType("message");
      } else if (data?.blockchain?.transaction) {
        setType("transaction");
      } else {
        setType("nothing matched");
      }
  }

  

  return (
    <div
      className="flex-1 flex items-center justify-end h-fit"
    >
      <div className="flex flex-row border-[1px] gap-2 rounded-md relative p-2 md:max-w-[400px] flex-1">
        <input
          type="text"
          placeholder="Enter the ID of transaction, message, block..."
          className="flex-1 border-none outline-none"
          value={hash}
          onChange={(e) => {
            setHash(e.target.value)
            setType("")
            debounced()
          }}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            if (hash === "" || !hash) {
              return;
            }

            checkChange()
          }}
          className="w-8 h-8 flex items-center justify-center border-none rounded-sm hover:bg-gray-500 text-white bg-black"
        >
          <SearchIcon width={18} size={18} />
        </button>

        {type != "" && (
          <div className="absolute flex items-center justify-between cursor-pointer border-[1px] rounded-sm z-10 bg-white px-4 py-2 -bottom-[50px] w-full left-0 max-w-[400px]">
            <Link href={type !== "nothing matched" ? `/${type}/${hash}` : pathname} ref={searchRef}>
              <TypographyP>
                {type}: {hash.slice(0, 4)}...{hash.slice(-4)}
              </TypographyP>
            </Link>
            <div onClick={(e) => {
              setType("")
              setHash("")
            }}>
              <XIcon width={15} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
