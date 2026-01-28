import { sleep } from "./sleep";
import categoriesData from "@/data/categories.json";
import modelsData from "@/data/modelsData.json";

export type CategoryProps = {
  id: number;
  displayName: string;
  slug: string;
};

export type ModelProps = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export const getCategories = async (): Promise<CategoryProps[]> => {
  await sleep(1000);

  return categoriesData as CategoryProps[];
};

export const getAllModels = async (): Promise<ModelProps[]> => {
  await sleep(1000);

  return modelsData as ModelProps[];
};

export const getModelById = async (id: number): Promise<ModelProps> => {
  await sleep(1000);

  const model = modelsData.find((model) => model.id === id);

  return model as ModelProps;
};
