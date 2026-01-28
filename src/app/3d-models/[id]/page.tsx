import ModelDetails from "@/components/pages/ModeDetails/ModelDetails";
import { getModelById, type ModelProps } from "@/services/api";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const model: ModelProps = await getModelById(JSON.parse(id));

  return (
    <>
      <ModelDetails model={model} />
    </>
  );
};

export default page;
