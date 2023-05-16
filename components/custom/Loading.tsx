import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-full min-h-[200px] flex items-center justify-center">
      <div className="border-4 w-8 h-8 animate-spin border-b-transparent rounded-full"></div>
    </div>
  );
};

export default Loading;
