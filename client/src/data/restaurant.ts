export const restaurantConfig = {
  name: "WATERFALL",
  shortName: "W",
  descriptor: "A study in fire, season, and the spaces between.",
  address: "India",
  phone: "Details coming soon",
  email: "hello@waterfall.in",
  hours: "Hours to be announced",
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=88",
};

export const dishes = [
  {
    id: "01",
    name: "Charred Carrot",
    subtitle: "Smoked yogurt · ember oil · dill pollen",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1500&q=88",
    tone: "#b96942",
  },
  {
    id: "02",
    name: "Ember Cabbage",
    subtitle: "Brown butter · sea herbs · rye crumb",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1500&q=88",
    tone: "#8a8e65",
  },
  {
    id: "03",
    name: "Black Garlic Rice",
    subtitle: "Hen of the woods · fermented chili · ash",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1500&q=88",
    tone: "#9e6b49",
  },
  {
    id: "04",
    name: "Miso Cod",
    subtitle: "Charred leek · koji broth · young greens",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=88",
    tone: "#d5ad77",
  },
  {
    id: "05",
    name: "Burnt Honey",
    subtitle: "Buckwheat · cultured cream · pear leaf",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1500&q=88",
    tone: "#c08b5a",
  },
];

export const menuData: Record<string, { name: string; description: string; price: string }[]> = {
  Starters: [
    { name: "Charred Carrot", description: "Smoked yogurt, ember oil, dill pollen", price: "$18" },
    { name: "Crisp Potato", description: "Whipped cod roe, preserved lemon, chive", price: "$16" },
    { name: "Raw Scallop", description: "Green strawberry, spruce, bronze fennel", price: "$21" },
  ],
  Mains: [
    { name: "Ember Cabbage", description: "Brown butter, sea herbs, rye crumb", price: "$24" },
    { name: "Miso Cod", description: "Charred leek, koji broth, young greens", price: "$38" },
    { name: "Black Garlic Rice", description: "Hen of the woods, fermented chili, ash", price: "$32" },
  ],
  Desserts: [
    { name: "Burnt Honey", description: "Buckwheat, cultured cream, pear leaf", price: "$16" },
    { name: "Warm Rye Cake", description: "Applewood ice cream, cider caramel", price: "$15" },
    { name: "Milk & Smoke", description: "Malted milk, cacao nib, sea salt", price: "$14" },
  ],
  Drinks: [
    { name: "House Vermouth", description: "Fennel seed, citrus peel, tonic", price: "$15" },
    { name: "Ember Old Fashioned", description: "Apple brandy, burnt honey, bitters", price: "$19" },
    { name: "Fermented Citrus", description: "Preserved lemon, rosemary, soda", price: "$11" },
  ],
};

export const galleryData = [
  { label: "THE ROOM", image: restaurantConfig.heroImage, size: "wide" },
  { label: "THE PLATE", image: dishes[2].image, size: "tall" },
  { label: "THE GARDEN", image: dishes[1].image, size: "square" },
  { label: "THE GLOW", image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1500&q=88", size: "tall" },
  { label: "THE TABLE", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=88", size: "wide" },
  { label: "THE DETAILS", image: dishes[4].image, size: "square" },
];

export const storyChapters = [
  { number: "01", title: "The beginning", body: "A room built around the quiet drama of an open flame." },
  { number: "02", title: "The philosophy", body: "We cook with what the season gives us, then get out of the way." },
  { number: "03", title: "The craft", body: "Fermentation, smoke, acidity, texture — each plate is a small composition." },
];
