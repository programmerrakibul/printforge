"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { type JSX } from "react";

const Home = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <section className="py-10">
        <Container className="flex flex-col-reverse md:flex-row items-center gap-7 md:gap-14">
          <div className="space-y-3.5 flex-1">
            <span>Your go-to platform for 3D printing files</span>
            <h1 className="text-red font-bold text-5xl leading-tight">
              Discover what’s possible with 3D printing
            </h1>
            <p className="text-2xl md:text-3xl">
              Join our community of creators and explore a vast library of
              user-submitted models.
            </p>
            <Button
              onClick={() => router.push("/3d-models")}
              size="lg"
              variant="outline"
              className="mt-14 text-base md:text-lg"
            >
              Browse models
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src="/hero_image.png"
              alt="Hero Image"
              width={667}
              height={667}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
