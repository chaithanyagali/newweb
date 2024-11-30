"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SearchBar() {
  return (
    <Tabs defaultValue="buy" className="w-full max-w-3xl bg-white/95 rounded-lg p-2">
      <TabsList className="grid grid-cols-3 gap-4 mb-4">
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
        <TabsTrigger value="sell">Sell</TabsTrigger>
      </TabsList>
      
      <div className="flex gap-2 p-2">
        <Input 
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="flex-1"
        />
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </Tabs>
  );
}