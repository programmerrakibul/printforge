import { sleep } from "./sleep";
import categoriesData from "@/data/categories.json";
import modelsData from "@/data/modelsData.json";

export type CategoryProps = {
  id: number;
  displayName: string;
  slug: string;
};

type GetAllModelsProps = {
  category?: string;
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

export const getAllModels = async ({
  category,
}: GetAllModelsProps): Promise<ModelProps[]> => {
  await sleep(1000);

  let filteredModels = [...modelsData];

  if (category?.trim()) {
    filteredModels = modelsData.filter((model) => model.category === category);
  }

  return filteredModels as ModelProps[];
};

export const getModelById = async (id: number): Promise<ModelProps> => {
  await sleep(1000);

  const model = modelsData.find((model) => model.id === id);

  return model as ModelProps;
};
