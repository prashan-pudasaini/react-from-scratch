import React from "react";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "h1" | "h2";
  children: React.ReactNode;
};

const Typography = ({ variant, children }: TypographyProps) => {
  return <>{variant === "h1" ? <h1>{children}</h1> : <h2>{children}</h2>}</>;
};

export default Typography;
