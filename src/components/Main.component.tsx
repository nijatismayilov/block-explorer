import React from "react";

export const Main: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className={"bg-light py-2 min-vh-100"}>
      {children}
    </div>
  )
}
