"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Buy from "@/components/navigation/buy";
import Rent from "@/components/navigation/rent";
import Sell from "@/components/navigation/sell";
import SignInModal from "@/components/auth/sign-in-modal";
import SignUp from "@/components/auth/sign-up";

export function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Menu at the Start */}
          <nav className="flex items-center space-x-6">
            <ul className="flex items-center space-x-6 list-none m-0 p-0">
              <li>
                <Buy />
              </li>
              <li>
                <Rent />
              </li>
              <li>
                <Sell />
              </li>
            </ul>
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6" />
              <span className="text-xl font-bold">HomeFind</span>
            </Link>
          </div>

          {/* Right-side buttons */}
          <div className="flex items-center space-x-4">
            {/* Open SignIn Modal */}
            <Button variant="ghost" onClick={() => setIsSignInOpen(true)}>
              Sign In
            </Button>
            {/* Open SignUp Modal */}
            <Button onClick={() => setIsSignUpOpen(true)}>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
      {/* Sign Up Modal */}
      {isSignUpOpen && <SignUp onClose={() => setIsSignUpOpen(false)} />}
    </header>
  );
}
