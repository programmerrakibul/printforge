import Models from "@/pages/Models/Models";
import { getAllModels, getCategories } from "@/services/api";
import { type JSX } from "react";

const page = async (): Promise<JSX.Element> => {
  const categories = await getCategories();
  const models = await getAllModels();

  return (
    <>
      <Models categories={categories} models={models} />
    </>
  );
};

export default page;
