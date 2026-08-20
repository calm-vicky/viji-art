import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ArtCategories from "@/components/ArtCategories";
import WhyVijiArt from "@/components/WhyVijiArt";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArtworks />
      <ArtCategories />
      <WhyVijiArt />
      <ContactCTA />
    </main>
  );
}