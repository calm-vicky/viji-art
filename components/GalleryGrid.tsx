"use client";

import { useState } from "react";
import Image from "next/image";
import { artworks } from "@/data/artworks";

const categories = [
  "All",
  "Charcoal",
  "Graphite",
  "Color Pencil",
  "Mini Arts",
  "Crochet",
  "Mehndi",
];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter(
          (artwork) => artwork.category === selectedCategory
        );

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Viji Art
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our handmade artwork across different styles and
            creative categories.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">
                  {artwork.category}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  {artwork.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}