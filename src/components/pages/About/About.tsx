import { Library, Users, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import type { JSX } from "react";
import type { LucideIcon } from "lucide-react";

type FeatureProps = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: FeatureProps[] = [
  {
    id: "a1b2c3d4e5f6g7h8i9j0k1l2",
    title: "100K+ models",
    description:
      "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
    icon: Library,
  },
  {
    id: "m3n4o5p6q7r8s9t0u1v2w3x4",
    title: "Active Community",
    description:
      "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
    icon: Users,
  },
  {
    id: "y5z6a7b8c9d0e1f2g3h4i5j6k7",
    title: "Free to Use",
    description:
      "Most models are free to download, with optional premium features for power users.",
    icon: Download,
  },
];

const About = (): JSX.Element => {
  return (
    <>
      <section className="py-10 mt-10">
        <Container className="flex flex-col-reverse md:flex-row items-center gap-7 md:gap-14">
          <div className="flex-1">
            <Image
              src={"/about_image.png"}
              alt="Empowering makers worldwide"
              width={800}
              height={800}
              className="rounded-md"
            />
          </div>
          <div className="space-y-4 flex-1">
            <h6 className="font-medium text-lg md:text-xl">ABOUT PRINTFORGE</h6>
            <h1 className="text-red font-bold text-5xl leading-tight">
              Empowering makers worldwide
            </h1>
            <p className="text-xl md:text-2xl">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-xl md:text-2xl">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-7 lg:gap-10">
            {features.map((item: FeatureProps): JSX.Element => {
              const IconComponent: LucideIcon = item.icon;

              return (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3.5">
                      <IconComponent />
                      <span>{item.title}</span>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-5 max-w-200">
          <h3 className="text-red font-bold text-5xl leading-tight">
            Our vision
          </h3>
          <p className="text-xl md:text-2xl">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&apos;s
            possible with 3D printing.
          </p>
          <Separator className="w-61.25! h-0.5! mx-auto" />
          <p className="text-xl md:text-2xl">
            Whether you&apos;re a hobbyist looking for your next weekend
            project, an educator seeking teaching materials, or a professional
            designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey in 3D printing.
          </p>
        </Container>
      </section>
    </>
  );
};

export default About;
