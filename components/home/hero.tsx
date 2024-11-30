"use client";

import Image from "next/image";
import { SearchBar } from "@/components/home/search-bar";

export function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find your place to call home
          </h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}