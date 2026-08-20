const categories = [
  {
    title: "Charcoal Drawing",
    description: "Expressive portraits created with rich charcoal tones.",
  },
  {
    title: "Graphite Drawing",
    description: "Detailed pencil artwork with beautiful shading.",
  },
  {
    title: "Color Pencil Drawing",
    description: "Vibrant artwork created with carefully layered colors.",
  },
  {
    title: "Mini Arts",
    description: "Small artworks that make meaningful little gifts.",
  },
  {
    title: "Crochet Work",
    description: "Handcrafted crochet creations made with care.",
  },
  {
    title: "Mehndi Art",
    description: "Beautiful traditional mehndi designs for special occasions.",
  },
];

export default function ArtCategories() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Art Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our collection of handmade artwork and creative
            handcrafted pieces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {category.description}
              </p>

              <button className="mt-5 text-sm font-medium text-gray-900 underline underline-offset-4">
                Explore →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}