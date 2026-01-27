import { type ReactNode, type JSX } from "react";

const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={`container mx-auto px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
