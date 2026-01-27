"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, JSX } from "react";

type NavLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

const NavLink = ({
  children,
  className = "",
  href,
}: NavLinkProps): JSX.Element => {
  const path = usePathname();
  const styles = clsx(className, {
    active: path === href,
  });

  return (
    <>
      <Link href={href} className={styles}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
