// lokasi file: src/components/Navbar.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Impor komponen Image

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* === Kolom Kiri === */}
          <div className="flex-1 flex justify-start">
            {/* PERUBAHAN 1: Menggunakan komponen Image untuk Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png" // Asumsi nama file Anda adalah ini
                alt="Fashion Wood Logo"
                width={160} // Sesuaikan lebar logo Anda
                height={40} // Sesuaikan tinggi logo Anda
                priority // Membuat logo dimuat lebih cepat
              />
            </Link>
          </div>

          {/* === Kolom Tengah === */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    href="/"
                    className="hover:text-gray-300 border-b-2 pb-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-gray-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* === Kolom Kanan === */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* PERUBAHAN 2: Search Bar dibuat transparan dengan border */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search Product"
                className="bg-transparent border border-white/30 rounded-full py-2 pl-4 pr-10 text-sm placeholder-white/70 focus:outline-none focus:border-white w-64"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/70"
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

            {/* Ikon Aksi */}
            <div className="flex items-center space-x-4">
              {/* ... ikon-ikon tetap sama ... */}
              <Link href="/orders" className="hover:text-gray-300">
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
              <Link href="/cart" className="hover:text-gray-300">
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
              <Link href="/profile" className="hover:text-gray-300">
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

      {/* PERUBAHAN 3: Garis pembatas horizontal di bawah navbar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-px bg-white opacity-20"></div>
    </nav>
  );
};

export default Navbar;
