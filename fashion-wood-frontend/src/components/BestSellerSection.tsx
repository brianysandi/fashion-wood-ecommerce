// lokasi: src/components/BestSellersSection.tsx

import { client } from "@/lib/sanity";
import ProductCarousel from "./ProductCarousel";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Interface Product tetap sama
export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  mainImage: SanityImageSource;
  price: number;
  description: string;
}

async function getBestSellers(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    slug,
    "mainImage": variants[0].images[0],
    "price": variants[0].price
  }`;
  const products = await client.fetch<Product[]>(query);
  return products;
}

// Props untuk variant
interface BestSellersSectionProps {
  variant?: "homepage" | "productsPage";
}

const BestSellersSection = async ({
  variant = "homepage",
}: BestSellersSectionProps) => {
  const products = await getBestSellers();

  return (
    // Section dan padding dihapus dari sini, kita kembalikan div biasa
    <div>
      {variant === "homepage" ? (
        <div className="text-center">
          <div className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm font-semibold tracking-widest">
            BEST SELLERS
          </div>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Loved by Customers
          </h2>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Best Sellers
          </h2>
          <Link
            href="/products?filter=bestsellers"
            className="text-sm font-semibold"
            style={{
              color: "#364445",
              textDecorationLine: "underline",
            }}
          >
            View All
          </Link>
        </div>
      )}

      <div className="mt-12">
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default BestSellersSection;
