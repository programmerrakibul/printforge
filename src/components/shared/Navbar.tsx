import { type JSX } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";

type NAV_LINKS_Props = {
  id: number;
  label: string;
  href: string;
};

const NAV_LINKS: NAV_LINKS_Props[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "3D Models",
    href: "/3d-models",
  },
  {
    id: 3,
    label: "About",
    href: "/about",
  },
];

const Navbar = (): JSX.Element => {
  return (
    <>
      <Container>
        <NavigationMenu className="justify-between max-w-full py-3">
          <Link href={"/"} className="w-37.5 block">
            <Image
              src="/logo_light.png"
              alt="PrintForge Logo"
              width={240}
              height={61}
              loading="eager"
            />
          </Link>
          <NavigationMenuList className="gap-5">
            {NAV_LINKS.map(
              (item: NAV_LINKS_Props): JSX.Element => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.href} className="font-semibold text-sm">
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </Container>
    </>
  );
};

export default Navbar;
