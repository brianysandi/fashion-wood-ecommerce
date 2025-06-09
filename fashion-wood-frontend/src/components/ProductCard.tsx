// lokasi: src/components/ProductCard.tsx

"use client"; // Menjadikan ini Client Component

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Impor hook

// Interface sekarang tidak perlu soldCount dari props
interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  cardType?: "default" | "bestseller";
}

const ProductCard = ({
  imageUrl,
  name,
  price,
  description,
  slug,
  cardType = "default",
}: ProductCardProps) => {
  // State untuk menyimpan jumlah terjual, hanya dibuat di client
  const [soldCount, setSoldCount] = useState(0);

  // useEffect hanya berjalan di client, setelah render pertama
  useEffect(() => {
    if (cardType === "bestseller") {
      // Kita hanya buat angka random jika tipenya bestseller
      setSoldCount(Math.floor(Math.random() * 200) + 50);
    }
  }, [cardType]); // Efek ini akan dijalankan jika cardType berubah

  return (
    <div className="block group">
      <div className="overflow-hidden rounded-lg">
        <Link
          href={`/products/${slug}`}
          className="relative block h-56 bg-gray-200"
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <Link href={`/products/${slug}`}>
            <h3 className="text-md font-semibold text-gray-800 hover:text-brand-medium">
              {name}
            </h3>
          </Link>
          <p className="text-md font-bold text-gray-900">
            Rp{new Intl.NumberFormat("id-ID").format(price)}
          </p>
        </div>

        <p className="mt-1 text-sm text-gray-500 h-10">{description}</p>

        <div className="mt-4">
          {cardType === "bestseller" ? (
            // Tampilkan hanya jika soldCount sudah di-generate (> 0)
            soldCount > 0 && (
              <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                {soldCount} sold
              </span>
            )
          ) : (
            <button className="w-full bg-gray-100 text-gray-700 text-sm font-semibold py-2 rounded-md hover:bg-gray-200 transition-colors">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
