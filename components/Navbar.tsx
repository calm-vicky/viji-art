import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold text-gray-900">
          Viji Art
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>

          <Link href="/gallery" className="text-gray-600 hover:text-black">
            Gallery
          </Link>

          <Link href="/pricing" className="text-gray-600 hover:text-black">
            Pricing
          </Link>

          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>

          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}