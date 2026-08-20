export default function ContactCTA() {
  const whatsappNumber = "918015032353";

  const message = encodeURIComponent(
    "Hi Viji Art! I would like to know more about your artwork."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
          Create Something Special
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Have an artwork in mind?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
          Let's turn your favorite memory, person or idea into a
          beautiful handmade artwork.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-gray-200"
        >
          Order on WhatsApp
        </a>

      </div>
    </section>
  );
}