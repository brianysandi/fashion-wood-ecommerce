// lokasi: src/components/SocialSection.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Komponen Ikon Sosial Media ---
const InstagramIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 3.522c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
      clipRule="evenodd"
    />
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M16.63 12.44c-.23-.12-1.37-.67-1.58-.75-.21-.08-.36-.12-.51.12-.15.23-.6.75-.73.9-.14.15-.27.16-.51.05-.23-.11-.99-.37-1.89-1.16-.7-.6-1.17-1.35-1.31-1.58-.14-.23-.01-.36.11-.47.11-.11.23-.27.35-.41.12-.14.16-.23.24-.38.08-.15.04-.27-.01-.38-.05-.12-.51-1.23-.7-1.68-.19-.45-.38-.39-.51-.4a.97.97 0 00-.45-.11c-.16 0-.39.04-.59.23-.2.19-.77.75-.77 1.82 0 1.07.79 2.11.9 2.26.12.15 1.57 2.4 3.79 3.32.53.22.95.36 1.27.46.51.17.97.14 1.34.09.43-.06 1.37-.56 1.56-1.1.2-.54.2-.99.14-1.1-.06-.11-.23-.16-.5-.27zm3.43-8.23a9.9 9.9 0 00-14.82 7.37c0 1.94.57 3.77 1.61 5.29L3.5 19.5l2.48-1.52c1.45.86 3.12 1.32 4.86 1.32h.01c5.44 0 9.86-4.42 9.86-9.86a9.86 9.86 0 00-4.12-8.21z" />
  </svg>
);
const FacebookIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const SocialSection = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Grid Gambar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/post-1.png"
                alt="Instagram post 1"
                className="object-cover rounded-lg"
                width={200}
                height={200}
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/post-2.png"
                alt="Instagram post 2"
                className="object-cover rounded-lg"
                width={200}
                height={200}
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/post-3.png"
                alt="Instagram post 3"
                className="object-cover rounded-lg"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Kolom Kanan: Teks dan Ikon Sosial Media */}
          <div className="text-center lg:text-center">
            <p className="text-2xl font-weight-400 tracking-tight text-gray-800">
              Follow us for more information!
            </p>

            <p
              className="text-3xl font-semibold text-gray-800"
              style={{ fontFamily: "var(--font-jockey-one)" }}
            >
              @fashionwood.id
            </p>
            <div className="mt-8 flex justify-center lg:justify-center gap-4">
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600"
              >
                <WhatsAppIcon />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
