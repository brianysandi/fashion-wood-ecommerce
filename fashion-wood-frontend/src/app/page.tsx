// LOKASI: src/app/page.tsx - VERSI FINAL DENGAN FINE-TUNING

import Link from "next/link";
import CategoriesSection from "@/components/CategoriesSection";
import BestSellersSection from "@/components/BestSellerSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import SocialSection from "@/components/SocialSection";

// Komponen Hero dipisah agar lebih rapi
const HeroSection = () => {
  return (
    <section className="relative h-screen pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/main-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-1/2 text-center text-white">
          <div>
            <h1
              className="text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-jockey-one)" }}
            >
              {"Nature's Touch in"}
              <br />
              {"Every Creation"}
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-base text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="bg-white text-gray-900 font-bold py-2 px-8 rounded-full text-base hover:bg-gray-200 transition duration-300"
              >
                SHOP NOW!
              </Link>
            </div>
          </div>
          <div className="mt-16 flex justify-center items-center gap-4 md:gap-8">
            <div className="w-48 text-center">
              <p className="text-3xl font-bold">1,000+</p>
              <p className="text-xs text-gray-300">High-Quality Products</p>
            </div>
            <div className="h-10 w-px bg-white/30"></div>
            <div className="w-48 text-center">
              <p className="text-3xl font-bold">5,000+</p>
              <p className="text-xs text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gray-200"></div>
        </div>
      </div>

      {/* PEMBUNGKUS DITAMBAHKAN DI SINI */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BestSellersSection variant="homepage" />
        </div>
      </section>

      <ValuePropsSection />
      <SocialSection />
    </>
  );
}
