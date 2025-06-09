// lokasi: src/components/CategoriesSection.tsx

import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm font-semibold tracking-widest">
          CATEGORIES
        </div>

        <h2
          className="mt-4 text-4xl font-bold text-gray-900"
          style={{ fontFamily: "var(--font-jockey-one)" }}
        >
          The Finest Wooden Products
        </h2>

        {/* PERBAIKAN PATH GAMBAR SESUAI DIREKTORI ANDA */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard
            href="/products?category=tables"
            imageSrc="/tables.png" // Disesuaikan
            title="TABLES"
          />
          <CategoryCard
            href="/products?category=chairs"
            imageSrc="/chairs.png" // Disesuaikan
            title="CHAIRS"
          />
          <CategoryCard
            href="/products?category=buffets"
            imageSrc="/buffets.png" // Disesuaikan
            title="BUFFETS"
          />
          <CategoryCard
            href="/products?category=others"
            imageSrc="/others.png" // Disesuaikan
            title="OTHERS"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
