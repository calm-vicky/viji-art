import Image from "next/image";

const artworks = [
  {
    title: "Charcoal Portrait",
    category: "Charcoal Drawing",
    image: "/images/hero-art.jpeg",
  },
  {
    title: "Graphite Portrait",
    category: "Graphite Drawing",
    image: "/images/hero-art.jpeg",
  },
  {
    title: "Color Pencil Portrait",
    category: "Color Pencil Drawing",
    image: "/images/hero-art.jpeg",
  },
];

export default function FeaturedArtworks() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Artwork
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A glimpse of our handmade artwork, created with care and attention
            to every detail.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {artworks.map((artwork) => (
            <div
              key={artwork.title}
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

                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {artwork.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}