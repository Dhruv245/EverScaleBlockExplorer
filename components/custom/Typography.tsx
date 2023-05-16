import React, { ReactElement, ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

export const TypographyH1: FC<Props> = ({ children }): ReactElement => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2: FC<Props> = ({ children }): ReactElement => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyH3: FC<Props> = ({ children }): ReactElement => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const TypographyH4: FC<Props> = ({ children }): ReactElement => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const TypographyP: FC<Props> = ({ children }): ReactElement => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export const TypographyBlockquote: FC<Props> = ({ children }): ReactElement => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export const TypographyLead: FC<Props> = ({ children }): ReactElement => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export const TypographyLarge: FC<Props> = ({ children }): ReactElement => {
  return <div className="text-lg font-semibold">{children}</div>;
};

export const TypographySmall: FC<Props> = ({ children }): ReactElement => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const TypographyMuted: FC<Props> = ({ children }): ReactElement => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export const TypographyMutedH3: FC<Props> = ({ children }): ReactElement => {
  return (
    <h3 className="scroll-m-20 text-2xl  tracking-tight text-muted-foreground">
      {children}
    </h3>
  );
};

export const TypographyTh: FC<Props> = ({ children }): ReactElement => {
  return (
    <th className="border px-8 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  );
};

export const TypographyTr: FC<Props> = ({ children }): ReactElement => {
  return (
    <tr className="m-0 border-t border-l border-b border-r even:bg-muted">
      {children}
    </tr>
  );
};

export const TypographyTd: FC<Props> = ({ children }): ReactElement => {
  return (
    <td className="px-4 py-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  );
};