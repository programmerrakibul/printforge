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
import { Heart } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

import type { ModelProps, CategoryProps } from "@/services/api";
import type { JSX } from "react";
import clsx from "clsx";

type ModelsProps = {
  categories: CategoryProps[] | [];
  models: ModelProps[] | [];
};

const Models = ({ categories = [], models = [] }: ModelsProps): JSX.Element => {
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catFilter = searchParams?.get("category");

  const handleFilter = (term?: string): void => {
    const params = new URLSearchParams(searchParams?.toString());

    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-12 gap-7">
            <aside className="md:col-span-2 overflow-x-auto md:sticky top-24 z-10">
              <NavigationMenu className="max-w-full block">
                <NavigationMenuList className="md:flex-col gap-1.5 justify-start overflow-x-auto! max-w-full">
                  <NavigationMenuItem className="w-full">
                    <Button
                      onClick={() => handleFilter()}
                      variant={"ghost"}
                      className={clsx("sidebar_nav", {
                        active: catFilter === null,
                      })}
                    >
                      All
                    </Button>
                  </NavigationMenuItem>
                  {categories.map((cat) => (
                    <NavigationMenuItem key={cat.id} className="w-full">
                      <Button
                        onClick={() => handleFilter(cat.slug)}
                        variant={"ghost"}
                        className={clsx("sidebar_nav", {
                          active: cat.slug === catFilter,
                        })}
                      >
                        {cat.displayName}
                      </Button>
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
                    onClick={() =>
                      push(
                        `/3d-models/${model.id}${catFilter === null ? "" : `?category=${catFilter}`}`,
                      )
                    }
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
