"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Sell() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Sell</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white shadow-lg rounded-md">
          <div className="grid gap-3 p-6 w-[400px]">
            <Link href="/sell" className="block p-2 hover:bg-accent rounded-md">
              Sell Your Home
            </Link>
            <Link href="/estimate" className="block p-2 hover:bg-accent rounded-md">
              Home Value Estimate
            </Link>
            <Link href="/agents" className="block p-2 hover:bg-accent rounded-md">
              Find an Agent
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
