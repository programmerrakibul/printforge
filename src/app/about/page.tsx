import About from "@/components/pages/About/About";

import { type Metadata } from "next";
import { type JSX } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture.",
};

const page = (): JSX.Element => {
  return (
    <>
      <About />
    </>
  );
};

export default page;
