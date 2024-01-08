import React from "react";

export default function Footer() {
  return (
    <footer className="flex h-20 flex-col items-center justify-between bg-gradient-to-b from-[#917eac] to-[#484c93]  text-white md:flex-row">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Hungry Hunters. All rights reserved.
        </p>
      </div>
      <div className="mt-4 flex space-x-4 md:mt-0">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src="/images/twitter.png" alt="Twitter" className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img
            src="/images/instagram.png"
            alt="Instagram"
            className="h-6 w-6"
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="GitHub" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
