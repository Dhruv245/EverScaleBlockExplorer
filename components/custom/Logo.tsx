import React, { FC, ReactElement } from "react";

type Props = {};

const Logo: FC<Props> = (props): ReactElement => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="300" cy="300" r="300" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M328.773 558L483 404.925L483 117L195.075 117L42 271.35L328.65 271.35L328.773 558Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
