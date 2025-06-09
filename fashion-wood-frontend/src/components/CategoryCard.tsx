// lokasi: src/components/CategoryCard.tsx

import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  href: string;
  imageSrc: string;
  title: string;
}

const CategoryCard = ({ href, imageSrc, title }: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className="relative block h-64 group rounded-lg overflow-hidden"
    >
      {/* PASTIKAN BAGIAN IMAGE INI SUDAH BENAR */}
      <Image
        src={imageSrc}
        alt={`Category: ${title}`}
        fill // Menggunakan 'fill', BUKAN 'layout="fill"'
        className="object-cover transition-transform duration-500 group-hover:scale-110" // Menggunakan 'object-cover' di className
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div className="absolute inset-0"></div>

      <div className="relative h-full flex items-end justify-center p-6">
        <h3 className="absolute inset-x-0 top-1/6 text-white text-2xl font-bold tracking-wider text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
