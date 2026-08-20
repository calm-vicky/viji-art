export type Artwork = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Charcoal Portrait",
    category: "Charcoal",
    image: "/images/hero-art.jpeg",
  },
  {
    id: 2,
    title: "Graphite Portrait",
    category: "Graphite",
    image: "/images/hero-art.jpeg",
  },
  {
    id: 3,
    title: "Color Pencil Portrait",
    category: "Color Pencil",
    image: "/images/hero-art.jpeg",
  },
  {
    id: 4,
    title: "Mini Artwork",
    category: "Mini Arts",
    image: "/images/hero-art.jpeg",
  },
  {
    id: 5,
    title: "Crochet Creation",
    category: "Crochet",
    image: "/images/hero-art.jpeg",
  },
  {
    id: 6,
    title: "Mehndi Design",
    category: "Mehndi",
    image: "/images/hero-art.jpeg",
  },
];