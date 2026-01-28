import Container from "@/components/ui/Container";
import { type ModelProps } from "@/services/api";

const ModelDetails = ({ model }: { model: ModelProps }) => {
  return (
    <>
      <section>
        <Container>
          <h1>{model.name}</h1>
        </Container>
      </section>
    </>
  );
};

export default ModelDetails;
