"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Buy() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white shadow-lg rounded-md">
          <div className="grid gap-3 p-6 w-[400px]">
            <Link href="/homes" className="block p-2 hover:bg-accent rounded-md">
              Homes for Sale
            </Link>
            <Link href="/foreclosures" className="block p-2 hover:bg-accent rounded-md">
              Foreclosure Homes
            </Link>
            <Link href="/new-construction" className="block p-2 hover:bg-accent rounded-md">
              New Construction
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
