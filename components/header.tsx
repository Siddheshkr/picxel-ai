"use client";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const { isLoading } = useStoreUser();

  if (path.includes("/editor")) {
    return null; // hides header on editor page
  }

  return (
    <header className="fixed top-5 left-1/2 h-fit transform -translate-x-1/2 z-50 text-nowrap">
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-3 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20 cursor-pointer">
          <Image
            src="/picxel.png"
            alt="Logo"
            className="min-w-24 object-cover"
            width={96}
            height={24}
          />
        </Link>
        {path === "/" && (
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}
        <div className="flex items-center gap-3 ml-10 md:ml-20">
          <Unauthenticated>
            <SignInButton>
              <Button variant="glass" className="hidden sm:flex cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary" className="cursor-pointer">
                Get started
              </Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <Link href="/dashboard">
              <Button variant="glass" className="cursor-pointer">
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>
            <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
          </Authenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#403E3E" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
