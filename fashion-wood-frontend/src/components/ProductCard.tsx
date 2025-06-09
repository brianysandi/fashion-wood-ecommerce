// lokasi: src/components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react"; // Kita tidak butuh useState dan useEffect lagi

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  slug: string;
}

const ProductCard = ({
  imageUrl,
  name,
  price,
  description,
  slug,
}: ProductCardProps) => {
  // Kita akan gunakan angka statis untuk sekarang agar selalu tampil
  const soldCount = 123;

  return (
    <Link href={`/products/${slug}`} className="block group">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-56 bg-gray-200">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-md font-semibold text-gray-800">{name}</h3>
          <p className="text-md font-bold text-gray-900">
            Rp{new Intl.NumberFormat("id-ID").format(price)}
          </p>
        </div>

        <p className="mt-1 text-sm text-gray-500 truncate">{description}</p>

        {/* Bagian Jumlah Terjual (sekarang selalu tampil) */}
        <div className="mt-2">
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
            {soldCount} sold
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
