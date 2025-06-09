// lokasi file: src/lib/sanity.ts

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; // <-- Impor package baru
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = "alcq73xh"; // Pastikan ini masih Project ID Anda
export const dataset = "production";
const apiVersion = "2025-06-09"; // Gunakan tanggal hari ini

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Buat image URL builder menggunakan client kita
const builder = imageUrlBuilder(client);

// Buat fungsi helper untuk digunakan di seluruh aplikasi
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
