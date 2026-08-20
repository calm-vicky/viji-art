const benefits = [
  {
    title: "Handmade with Care",
    description:
      "Every artwork is carefully created by hand with attention to detail.",
  },
  {
    title: "Made for You",
    description:
      "Turn your favorite memories and ideas into meaningful artwork.",
  },
  {
    title: "Multiple Art Styles",
    description:
      "Choose from charcoal, graphite, color pencil, crochet, mehndi and more.",
  },
  {
    title: "Worldwide Shipping",
    description:
      "We carefully pack and ship orders to customers around the world.",
  },
];

export default function WhyVijiArt() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Why Viji Art
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Art Made With Heart
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We create handmade artwork that turns memories, creativity and
            emotions into something you can keep forever.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}