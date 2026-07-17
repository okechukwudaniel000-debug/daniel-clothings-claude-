export const morphingPhrases = [
  "Fashion Crafted For Confidence",
  "Dress Elegant, Be Elegant",
  "Elegance Woven Into Every Detail",
  "Modern Fashion Meets Tradition",
  "Dress With Confidence",
  "Luxury That Speaks For You",
  "Where Tradition Meets Modern Elegance",
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const storySections = [
  {
    eyebrow: "Chapter One",
    title: "Our Journey",
    copy: "Daniel Clothings began as a single tailoring bench and a conviction that Nigerian craftsmanship deserved a global stage. Every stitch since has carried that promise forward — from first measurements to finished silhouette.",
    pattern: "journey",
  },
  {
    eyebrow: "Chapter Two",
    title: "Inspired By Nigerian Culture",
    copy: "Ankara prints, Agbada drapes, and Senator tailoring are not references — they are our vocabulary. We translate heritage textiles into garments built for boardrooms, weddings, and everywhere confidence is required.",
    pattern: "heritage",
  },
  {
    eyebrow: "Chapter Three",
    title: "Modern Corporate Excellence",
    copy: "Clean lines, precise tailoring, and fabrics chosen for how they move in a room. Our corporate edit is designed for the executive who leads meetings and sets trends in the same breath.",
    pattern: "corporate",
  },
  {
    eyebrow: "Chapter Four",
    title: "Designed For Confidence",
    copy: "A Daniel Clothings piece is finished only when it changes how you stand in it. That is the brief behind every collection: garments engineered to be worn with certainty.",
    pattern: "confidence",
  },
];

export type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
  pattern: "ankara" | "agbada" | "senator" | "corporate" | "luxury" | "casual";
  objectPosition?: string;
};

export const collections: Collection[] = [
  {
    id: "ankara",
    name: "Ankara Collection",
    description: "Bold wax-print silhouettes cut for modern occasions.",
    pattern: "ankara",
    image: "/ankara.jpg",
  },
  {
    id: "agbada",
    name: "Agbada Collection",
    description: "Flowing, regal layers for ceremonies and statement entrances.",
    pattern: "agbada",
    image: "/agbada ceremony.jpg",
    objectPosition: "center 20%", // Adjusted for agbada image
  },
  {
    id: "senator",
    name: "Senator Collection",
    description: "Sharp, structured native wear for the modern gentleman.",
    pattern: "senator",
    image: "/senator.jpg",
  },
  {
    id: "corporate",
    name: "Corporate Collection",
    description: "Tailored suiting engineered for presence in any boardroom.",
    pattern: "corporate",
    image: "/Corporate Suiting.jpg",
  },
  {
    id: "luxury-women",
    name: "Women's Luxury Collection",
    description: "Refined silhouettes that move between elegance and edge.",
    pattern: "luxury",
    image: "/Women's Luxury.jpg",
  },
  {
    id: "casual",
    name: "Casual Collection",
    description: "Everyday essentials finished with quiet, premium detail.",
    pattern: "casual",
    image: "/casual edit.jpg",
  },
];

export const features = [
  {
    title: "Premium Fabrics",
    description: "Sourced for drape, durability, and a feel you notice immediately.",
  },
  {
    title: "Exceptional Craftsmanship",
    description: "Every seam finished by hand by master tailors.",
  },
  {
    title: "Authentic Nigerian Fashion",
    description: "Heritage prints and silhouettes, made for the present day.",
  },
  {
    title: "Modern Corporate Styles",
    description: "Sharp tailoring designed for the executive wardrobe.",
  },
  {
    title: "Fast Delivery",
    description: "From atelier to doorstep, swiftly and securely.",
  },
  {
    title: "Customer Satisfaction",
    description: "A fit and finish guaranteed, every single order.",
  },
];

export const reviews = [
  {
    name: "Amaka O.",
    role: "Corporate Client",
    rating: 5,
    quote: "Outstanding quality and excellent customer service. The fit was perfect.",
  },
  {
    name: "Chidi E.",
    role: "Wedding Client",
    rating: 5,
    quote: "Daniel Clothings exceeded my expectations. Elegant and professional.",
  },
  {
    name: "Folake A.",
    role: "Event Client",
    rating: 5,
    quote: "Beautiful traditional attire. I received compliments throughout the event.",
  },
  {
    name: "Tunde B.",
    role: "Repeat Customer",
    rating: 5,
    quote: "The craftsmanship is exceptional.",
  },
];

export const trustStats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 200, suffix: "+", label: "Corporate Clients" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
  { value: 36, suffix: " States", label: "Nationwide Delivery" },
];

export type ShowcaseImage = {
  id: number;
  label: string;
  tall: boolean;
  image: string;
  pattern: Collection["pattern"];
  objectPosition?: string;
};

export const showcaseImages: ShowcaseImage[] = [
  {
    id: 1,
    label: "Ankara Editorial",
    pattern: "ankara",
    tall: true,
    image: "/ankara.jpg",
  },
  {
    id: 2,
    label: "Agbada Ceremony",
    pattern: "agbada",
    tall: false,
    image: "/agbada ceremony.jpg",
    objectPosition: "center 20%", // Adjusted for agbada image
  },
  {
    id: 3,
    label: "Senator Tailoring",
    pattern: "senator",
    tall: false,
    image: "/senator.jpg",
  },
  {
    id: 4,
    label: "Corporate Suiting",
    pattern: "corporate",
    tall: true,
    image: "/Corporate Suiting.jpg",
  },
  {
    id: 5,
    label: "Women's Luxury",
    pattern: "luxury",
    tall: false,
    image: "/Women's Luxury.jpg",
  },
  {
    id: 6,
    label: "Casual Edit",
    pattern: "casual",
    tall: true,
    image: "/casual edit.jpg",
  },
  {
    id: 7,
    label: "Studio Detail",
    pattern: "corporate",
    tall: false,
    image: "/studio detail.jpg",
  },
  {
    id: 8,
    label: "Runway Moment",
    pattern: "ankara",
    tall: false,
    image: "/Runway Moment.jpg",
  },
];

export const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2349132715125",
    color: "#25D366",
  },
  {
    name: "Telegram",
    href: "https://t.me/DanielClothings000",
    color: "#229ED9",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@danielclothings_",
    color: "#FFFFFF",
  },
];
