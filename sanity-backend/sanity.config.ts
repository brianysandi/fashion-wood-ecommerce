// lokasi file: sanity-backend/sanity.config.ts

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// Baris ini sekarang akan bekerja dengan benar karena kita sudah mengatur index.ts
import {schemaTypes} from './schemaTypes'

// Ganti ini dengan Project ID Anda yang sebenarnya
const projectId = 'alcq73xh'
const dataset = 'production'

export default defineConfig({
  name: 'fashion_wood',
  title: 'Fashion Wood',

  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    // Bagian ini memberitahu Sanity untuk menggunakan skema dari file kita
    types: schemaTypes,
  },
})
