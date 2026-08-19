import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Viji Art
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Turn Your Memories Into Art
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Handcrafted charcoal, graphite and color pencil portraits
            made especially for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800">
              View Our Artwork
            </button>

            <button className="rounded-full border border-gray-300 px-7 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Order on WhatsApp
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            🌎 We ship worldwide
          </p>
        </div>

        {/* Artwork Placeholder */}
        <div className="flex justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl">
            <Image src="/images/hero-art.jpeg" alt="Viji Art handmade artwork" fill className="object-cover" priority />
            </div>
        </div>

      </div>
    </section>
  );
}