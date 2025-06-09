// lokasi file: src/components/Navbar.tsx

"use client"; // LANGKAH 1: Menjadikan ini Client Component

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // LANGKAH 2: Impor hook usePathname

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const pathname = usePathname(); // LANGKAH 3: Dapatkan path URL saat ini

  // Logika untuk warna tetap sama
  const isSolid = variant === "solid";
  const navClasses = isSolid
    ? "bg-white text-gray-800 shadow-sm"
    : "bg-transparent text-white";
  const linkHoverClass = isSolid
    ? "hover:text-brand-medium"
    : "hover:text-gray-300";
  const activeLinkClass = isSolid ? "border-brand-medium" : "border-white";
  const searchInputClass = isSolid
    ? "bg-gray-100 placeholder-gray-400 focus:border-brand-medium focus:ring-brand-medium"
    : "bg-transparent border-white/30 placeholder-white/70 focus:border-white";
  const searchIconClass = isSolid ? "text-gray-400" : "text-white/70";
  const iconGroupClasses = isSolid ? "text-gray-500" : "text-white";
  const dividerClass = isSolid ? "bg-gray-200" : "bg-white opacity-20";
  const logoSrc = isSolid ? "/logo.png" : "/logo.png";

  // Membuat daftar link agar lebih rapi
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 ${navClasses}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="Fashion Wood Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* === Kolom Tengah (Dengan Logika Baru) === */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        // Terapkan class secara dinamis
                        className={`${linkHoverClass} pb-1 border-b-2 ${isActive ? activeLinkClass : "border-transparent"}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* === Kolom Kanan === */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search Product"
                className={`border rounded-full py-2 pl-4 pr-10 text-sm transition-colors w-64 ${searchInputClass}`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className={`w-5 h-5 ${searchIconClass}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className={`flex items-center space-x-4 ${iconGroupClasses}`}>
              <Link href="/orders" className={linkHoverClass}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </Link>
              <Link href="/cart" className={linkHoverClass}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
              <Link href="/profile" className={linkHoverClass}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-px ${dividerClass}`}
      ></div>
    </nav>
  );
};

export default Navbar;
