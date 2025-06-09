// lokasi: src/app/products/page.tsx

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { client, urlFor } from "@/lib/sanity";
import type { Product } from "@/components/BestSellerSection";
import Link from "next/link";
import BestSellersSection from "@/components/BestSellerSection";

async function getAllProducts() {
  const query = `*[_type == "product"]{
    _id, name, description, slug,
    "mainImage": variants[0].images[0],
    "price": variants[0].price
  }`;
  const products = await client.fetch<Product[]>(query);
  return products;
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="bg-white">
      <Navbar variant="solid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="h-[40vh] bg-gray-200 rounded-xl flex items-center justify-center mb-16">
          <h1 className="text-3xl font-bold text-gray-400">
            Promotional Banner Area
          </h1>
        </div>

        <FilterBar />

        {/* Area Newest Arrivals */}
        <div className="mb-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Newest Arrivals
            </h2>
            <Link
              href="/products"
              className="text-sm font-semibold"
              style={{
                color: "#364445",
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                slug={product.slug.current}
                imageUrl={urlFor(product.mainImage).url()}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>

        {/* PEMBUNGKUS DITAMBAHKAN DI SINI */}
        <div className="py-20">
          <BestSellersSection variant="productsPage" />
        </div>
      </div>
    </div>
  );
}
