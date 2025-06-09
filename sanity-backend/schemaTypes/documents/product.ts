// lokasi file: sanity-backend/schemaTypes/documents/product.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // Field ini tetap milik Induk Produk
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Contoh: Console Table, Dining Table',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'General Description',
      description: 'Deskripsi umum untuk semua varian produk ini.',
      type: 'text',
    }),

    // -- INI BAGIAN UTAMA YANG BARU --
    // Field untuk menampung daftar varian
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array', // Tipenya adalah sebuah daftar
      of: [
        {
          title: 'Variant',
          type: 'productVariant', // Setiap item dalam daftar adalah sebuah 'productVariant'
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.title',
    },
    // Kita tidak bisa menampilkan gambar utama lagi di sini,
    // karena gambar sekarang ada di dalam setiap varian.
  },
})
