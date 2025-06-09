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
      {/* PERUBAHAN DI KOMPONEN IMAGE DI BAWAH INI */}
      <Image
        src={imageSrc}
        alt={`Category: ${title}`}
        fill // Menggantikan layout="fill"
        className="object-cover transition-transform duration-500 group-hover:scale-110" // objectFit menjadi class
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Overlay gelap untuk kontras */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teks Judul Kategori */}
      <div className="relative h-full flex items-end justify-start p-6">
        <h3 className="text-white text-2xl font-bold tracking-wider">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
