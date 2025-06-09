// lokasi: src/components/ProductCarousel.tsx

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";
import { urlFor } from "@/lib/sanity";
import type { Product } from "./BestSellerSection";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
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
              cardType="bestseller"
              slug={product.slug.current}
              imageUrl={urlFor(product.mainImage).url()}
              name={product.name}
              price={product.price}
              description={product.description}
              // prop soldCount dihapus dari sini
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
