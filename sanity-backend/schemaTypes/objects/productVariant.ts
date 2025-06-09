// lokasi file: sanity-backend/schemaTypes/objects/productVariant.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Variant Title',
      type: 'string',
      description: 'Contoh: Console A, Model Putih, Ukuran L',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU (Stock Keeping Unit)',
      type: 'string',
    }),
    defineField({
      name: 'quantity',
      title: 'Stock Quantity',
      type: 'number',
      description: 'Jumlah stok yang tersedia untuk varian ini.',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    // --- FIELD DIMENSI YANG HILANG, DITAMBAHKAN DI SINI ---
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        defineField({
          name: 'length',
          title: 'Length (cm)',
          type: 'number',
        }),
        defineField({
          name: 'width',
          title: 'Width (cm)',
          type: 'number',
        }),
        defineField({
          name: 'height',
          title: 'Height (cm)',
          type: 'number',
        }),
        defineField({
          name: 'thickness',
          title: 'Thickness (cm)',
          type: 'number',
        }),
      ],
    }),
  ],
})
