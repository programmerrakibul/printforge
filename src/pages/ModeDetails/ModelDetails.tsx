import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";

import { type ModelProps } from "@/services/api";
import { format } from "date-fns";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type JSX } from "react";

const ModelDetails = ({ model }: { model: ModelProps }): JSX.Element => {
  const {
    name,
    description,
    category,
    dateAdded = new Date().toISOString(),
    image,
    likes,
  } = model || {};

  return (
    <>
      <section className="py-10 mt-10">
        <Container className="flex flex-col md:flex-row gap-7">
          <div className="flex-1">
            <Image src={image} alt={name} width={300} height={300} />
          </div>
          <div className="flex-1 space-y-3.5">
            <Link href={"/3d-models"} className="inline-block">
              Back to Models
            </Link>
            <p className="flex items-center gap-2">
              <Heart size={18} />
              <span>{likes}</span>
            </p>
            <h3 className="font-bold text-3xl">{name}</h3>
            <Badge variant={"outline"}>{category}</Badge>
            <p>{description}</p>
            <p>Added on {format(dateAdded, "MM/dd/yyyy")}</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ModelDetails;
