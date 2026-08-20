import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ArtCategories from "@/components/ArtCategories";
import WhyVijiArt from "@/components/WhyVijiArt";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArtworks />
      <ArtCategories />
      <WhyVijiArt />
    </main>
  );
}