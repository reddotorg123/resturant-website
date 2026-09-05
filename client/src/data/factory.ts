export const factoryConfig = {
  name: "YUVA FACTORY",
  descriptor: "Ice cream, made with purpose.",
  location: "India",
  email: "hello@yuvafactory.in",
  phone: "+91 00000 00000",
  heroImage: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=2200&q=90",
  factoryImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=88",
};

export const flavors = [
  { id: "vanilla", name: "Vanilla", detail: "Madagascan vanilla · cold-set cream", image: "/manus-storage/z6T9YpDOV0gt_5df6ad1b.jpg", color: "#f1e3bb" },
  { id: "chocolate", name: "Chocolate", detail: "Single-origin cocoa · dark fudge ripple", image: "/manus-storage/TvfyKZvEPJ9s_bff65bb9.jpg", color: "#8f5b45" },
  { id: "strawberry", name: "Strawberry", detail: "Sun-ripened fruit · fresh cream", image: "/manus-storage/cXnZZLQpjbk4_a161b864.jpg", color: "#f28d86" },
  { id: "mango", name: "Mango", detail: "Alphonso mango · bright citrus finish", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=88", color: "#f6b646" },
  { id: "pistachio", name: "Pista", detail: "Roasted pistachio · sea salt", image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=88", color: "#a5bd82" },
];

export const products = [
  { slug: "vanilla-cup", category: "CUPS", name: "Vanilla / 100 ml", description: "A quiet classic with a deep, floral finish.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1400&q=90", accent: "#e3d5ad", pack: "100 ml · single serve" },
  { slug: "chocolate-cone", category: "CONES", name: "Chocolate / Cone", description: "Dark cocoa ice cream, finished with a crisp wafer shell.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1400&q=90", accent: "#99604a", pack: "110 ml · single serve" },
  { slug: "mango-tub", category: "TUBS", name: "Mango / 500 ml", description: "A full, bright scoop of the Indian summer.", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=90", accent: "#efb746", pack: "500 ml · share pack" },
  { slug: "berry-stick", category: "STICKS", name: "Berry / Stick", description: "Cultured cream, wild berry ripple, a clean snap.", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1400&q=90", accent: "#e88383", pack: "65 ml · single serve" },
];

export const processSteps = [
  { number: "01", name: "Ingredient selection", detail: "Milk, cream, fruit, cocoa, nuts — chosen for what they can become.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=88" },
  { number: "02", name: "Mixing & pasteurization", detail: "Controlled heat, stainless steel, and time bring the base into balance.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=88" },
  { number: "03", name: "Aging & freezing", detail: "The moment liquid becomes texture — cold, slow, precise.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=88" },
  { number: "04", name: "Filling & packaging", detail: "Every cup, cone, tub, and stick leaves the line ready for the world.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=88" },
  { number: "05", name: "Quality & cold chain", detail: "From our floor to your freezer, the cold never breaks.", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=88" },
];

export const galleryItems = [
  { label: "THE LINE", image: factoryConfig.factoryImage, size: "wide" },
  { label: "THE SCOOP", image: flavors[1].image, size: "tall" },
  { label: "THE COLD", image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=1400&q=88", size: "square" },
  { label: "THE INGREDIENT", image: flavors[2].image, size: "tall" },
  { label: "THE PACK", image: products[2].image, size: "wide" },
  { label: "THE DETAIL", image: flavors[4].image, size: "square" },
];
