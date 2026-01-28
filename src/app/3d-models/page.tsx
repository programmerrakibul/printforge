import Models from "@/components/pages/Models/Models";
import { getAllModels, getCategories } from "@/services/api";

import type { JSX } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}): Promise<JSX.Element> => {
  const { category } = await searchParams;
  const categories = await getCategories();
  const models = await getAllModels({ category });

  return (
    <>
      <Models categories={categories} models={models} />
    </>
  );
};

export default page;
