import Container from "@/components/ui/Container";
import Image from "next/image";
import { type JSX } from "react";

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
    </>
  );
};

export default About;
