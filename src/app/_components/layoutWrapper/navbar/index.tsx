import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b  p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-black">Hungry Hunter</div>
          <div className="hidden items-center space-x-1 md:flex">
            <Link
              href="/home"
              className="rounded px-4 py-2 text-black hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded px-4 py-2 text-black hover:bg-gray-200"
            >
              About Us
            </Link>
            {/* <Link
              href="/vegan"
              className="rounded px-4 py-2 text-black hover:bg-gray-200"
            >
              Vegan
            </Link> */}
            <Link
              href="/contactUs"
              className="rounded px-4 py-2 text-black hover:bg-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
