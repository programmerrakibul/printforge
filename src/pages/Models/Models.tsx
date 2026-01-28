"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/Container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavLink from "@/components/ui/NavLink";
import type { ModelProps, CategoryProps } from "@/services/api";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type JSX } from "react";

type ModelsProps = {
  categories: CategoryProps[];
  models: ModelProps[];
};

const Models = ({ categories, models }: ModelsProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-12 gap-7">
            <aside className="md:col-span-2 overflow-x-auto md:sticky top-24 z-10">
              <NavigationMenu>
                <NavigationMenuList className="md:flex-col gap-3.5 justify-start overflow-x-auto! max-w-full">
                  <NavigationMenuItem className="w-full">
                    <NavLink href="/3d-models" className="sidebar_nav">
                      All
                    </NavLink>
                  </NavigationMenuItem>
                  {categories.map((cat) => (
                    <NavigationMenuItem key={cat.id} className="w-full">
                      <NavLink
                        href={`/3d-models?category=${cat.slug}`}
                        className="sidebar_nav"
                      >
                        {cat.displayName}
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </aside>
            <div className="md:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
                {models.map((model) => (
                  <Card
                    key={model.id}
                    className="pt-0 cursor-pointer"
                    onClick={() => router.push(`/3d-models/${model.id}`)}
                  >
                    <figure>
                      <Image
                        src={model.image}
                        alt={model.name}
                        width={267}
                        height={267}
                        className="w-full h-56 aspect-3/2 object-cover"
                      />
                    </figure>
                    <CardHeader>
                      <CardTitle>
                        <h4>{model.name}</h4>
                      </CardTitle>
                      <CardDescription>
                        <p className="min-h-10 line-clamp-2">
                          {model.description}
                        </p>
                      </CardDescription>
                      <Badge variant={"outline"} className="capitalize">
                        {model.category}
                      </Badge>
                      <CardDescription className="flex items-center gap-2 mt-4">
                        <Heart size={18} />
                        <span>{model.likes}</span>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Models;
