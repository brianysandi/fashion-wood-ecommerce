// lokasi: src/components/BestSellersSection.tsx

// PERBAIKAN 2: Impor tipe data spesifik untuk gambar Sanity
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
// PERBAIKAN 1: urlFor dihapus dari import ini karena tidak digunakan di sini
import { client } from "@/lib/sanity";
import ProductCarousel from "./ProductCarousel";

// Definisikan tipe data yang lebih lengkap sesuai query
export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  // PERBAIKAN 2: 'any' diganti dengan tipe yang benar
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

const BestSellersSection = async () => {
  const products = await getBestSellers();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm font-semibold tracking-widest">
            BEST SELLERS
          </div>
          <h2
            className="mt-4 text-4xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-jockey-one)" }}
          >
            Loved by Customers
          </h2>
        </div>

        <div className="mt-12">
          <ProductCarousel products={products} />
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
