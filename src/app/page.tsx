import Home from "@/components/pages/Home/Home";

import { type Metadata } from "next";
import { type JSX } from "react";

export const metadata: Metadata = {
  title: "Home",
};

const page = (): JSX.Element => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
