import ModelDetails from "@/components/pages/ModeDetails/ModelDetails";
import { getModelById, type ModelProps } from "@/services/api";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const model: ModelProps = await getModelById(JSON.parse(id));

  return {
    title: model.name || "Model Details",
  };
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const model: ModelProps = await getModelById(JSON.parse(id));

  return (
    <>
      <ModelDetails model={model} />
    </>
  );
};

export default page;
