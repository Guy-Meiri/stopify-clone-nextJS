"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }) => {
  console.error("Sidebar");
  const pathname = usePathname();

  const routes = useMemo(() => {
    [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ];
  }, [pathname]);
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>{children}</Box>
      </div>
    </div>
  );
};

export default Sidebar;
