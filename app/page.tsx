export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
            Handmade Art
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Viji Art
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Handmade Art Crafted with Love
          </p>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Transform your precious memories into beautiful handmade
            artworks with charcoal, graphite and color pencil.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800">
              View Gallery
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-100">
              Order on WhatsApp
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            🌎 We Ship Worldwide
          </p>

        </div>

      </section>

    </main>
  );
}