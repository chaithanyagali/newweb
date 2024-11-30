"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Rent() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Rent</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white shadow-lg rounded-md">
          <div className="grid gap-3 p-6 w-[400px]">
            <Link href="/rentals" className="block p-2 hover:bg-accent rounded-md">
              Rental Listings
            </Link>
            <Link href="/apartments" className="block p-2 hover:bg-accent rounded-md">
              Apartments for Rent
            </Link>
            <Link href="/luxury-rentals" className="block p-2 hover:bg-accent rounded-md">
              Luxury Rentals
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
