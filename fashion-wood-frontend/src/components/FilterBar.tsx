// lokasi: src/components/FilterBar.tsx

"use client";

import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { client } from "@/lib/sanity";

// Ikon untuk dropdown
const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Tipe data untuk kategori dari Sanity
type Category = {
  _id: string;
  title: string;
};

const FilterBar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Categories");
  const [selectedPrice, setSelectedPrice] = useState<string>("Price");

  const priceRanges = [
    "IDR 0 - IDR 500K",
    "IDR 500K - IDR 1.000K",
    "IDR 1.000K - IDR 2.500K",
    "> IDR 2.500K",
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{ _id, title }`;
      const result = await client.fetch<Category[]>(query);
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex items-center space-x-4 mb-8">
      {/* Dropdown Categories */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-between w-48 bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {selectedCategory}
          <ChevronDownIcon />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {categories.map((category) => (
                <Menu.Item key={category._id}>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => setSelectedCategory(category.title)}
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                    >
                      {category.title}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Dropdown Price */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-between w-48 bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {selectedPrice}
          <ChevronDownIcon />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {priceRanges.map((range) => (
                <Menu.Item key={range}>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => setSelectedPrice(range)}
                      className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                    >
                      {range}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* PERUBAHAN WARNA PADA TOMBOL OK */}
      <button
        type="button"
        className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
        style={{ backgroundColor: "#364445" }}
      >
        OK
      </button>
    </div>
  );
};

export default FilterBar;
