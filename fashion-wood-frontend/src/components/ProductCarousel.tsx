// lokasi: src/components/ProductCarousel.tsx

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";
import { urlFor } from "@/lib/sanity";
import type { Product } from "./BestSellerSection"; // Impor tipe dari BestSellersSection

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false, // Loop lebih baik dimatikan jika jumlah produk sedikit
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {products.map((product) => (
          <div className="embla__slide" key={product._id}>
            <ProductCard
              slug={product.slug.current}
              // Kirim URL gambar yang sudah jadi dan nama untuk alt text
              imageUrl={urlFor(product.mainImage).url()}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
