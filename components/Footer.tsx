export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">

        <h2 className="text-xl font-semibold text-gray-900">
          Viji Art
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Handmade artwork crafted with love.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          🌎 We ship all over the world
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a
            href="https://www.instagram.com/viji._.art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@VijiArtTamil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            YouTube
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Viji Art. All rights reserved.
        </p>

      </div>
    </footer>
  );
}