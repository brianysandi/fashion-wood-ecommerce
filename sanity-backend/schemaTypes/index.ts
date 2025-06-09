// lokasi file: sanity-backend/schemaTypes/index.ts

import product from './documents/product'
import category from './documents/category'
import productVariant from './objects/productVariant' // <-- TAMBAHKAN BARIS INI

export const schemaTypes = [
  // Documents
  product,
  category,

  // Objects
  productVariant, // <-- DAN TAMBAHKAN DI SINI
]
