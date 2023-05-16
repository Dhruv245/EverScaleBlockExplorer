import React from "react";
import { TypographyH3, TypographyP } from "./Typography";

type Props = {};

const Loading = (props: Props) => {
    return (
        <div className="flex flex-col w-full text-center items-center justify-center min-h-[300px]"><TypographyH3>No Data Found</TypographyH3><TypographyP>You probably provided wrong hash or address or there is some network issue</TypographyP></div>
    );
};

export default Loading;
