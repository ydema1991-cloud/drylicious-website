// React single-page website for Yeshi's Fruit Craft – It's Drylicious
// Product showcase with email ordering, high-quality images, hover zoom, category filters, and per-fruit benefits

import React, { useMemo, useState } from "react";

const products = [
  {
    name: "Mango Slices",
    description: "Naturally sweet dried mango slices.",
    benefits: [
      "Rich in Vitamin A for skin and vision",
      "Antioxidants that support immunity",
      "Natural enzymes that aid digestion",
    ],
    image:
      "https://images.unsplash.com/photo-1600788915878-900a3e1c3d64?auto=format&fit=crop&w=800&q=80",
    categories: ["Tropical", "Classics"],
  },
  {
    name: "Apple Rings",
    description: "Crisp and tangy dried apple rings.",
    benefits: [
      "High in dietary fiber for gut health",
      "Source of Vitamin C",
      "May support heart health",
    ],
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80",
    categories: ["Classics"],
  },
  {
    name: "Pineapple Chunks",
    description: "Tropical dried pineapple chunks.",
    benefits: [
      "Bromelain enzyme may aid digestion",
      "Vitamin C for immune support",
      "Contains manganese",
    ],
    image:
      "https://images.unsplash.com/photo-1587731540174-42b7a4b83b38?auto=format&fit=crop&w=800&q=80",
    categories: ["Tropical"],
  },
  {
    name: "Mixed Fruit Medley",
    description: "A colorful mix of dried fruits.",
    benefits: [
      "Balanced mix of vitamins and minerals",
      "Dietary fiber from multiple fruits",
      "Convenient energy for on-the-go",
    ],
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
    categories: ["Mixed"],
  },
  {
    name: "Banana Chips",
    description: "Crispy and naturally sweet dried banana slices.",
    benefits: [
      "Potassium to support normal muscle function",
      "Quick natural energy",
      "Vitamin B6 source",
    ],
    image:
      "https://images.unsplash.com/photo-1615486364206-9b8f11d0d059?auto=format&fit=crop&w=800&q=80",
    categories: ["Tropical", "Classics"],
  },
  {
    name: "Orange Slices",
    description: "Zesty and tangy dried orange slices.",
    benefits: [
      "High in Vitamin C",
      "Citrus flavonoids with antioxidant activity",
      "Great for skin-friendly collagen support",
    ],
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    categories: ["Citrus"],
  },
  {
    name: "Lemon Slices",
    description: "Tart and refreshing dried lemon slices.",
    benefits: [
      "Vitamin C for immune support",
      "Bright citrus flavor encourages hydration",
      "Natural pectin fiber",
    ],
    image:
      "https://images.unsplash.com/photo-1571348500628-5fcbc1bb1ec5?auto=format&fit=crop&w=800&q=80",
    categories: ["Citrus"],
  },
  {
    name: "Strawberries",
    description: "Sweet and juicy dried strawberry halves.",
    benefits: [
      "Vitamin C and manganese",
      "Antioxidants (anthocyanins)",
      "Naturally low in fat",
    ],
    image:
      "https://images.unsplash.com/photo-1615484477650-e4f5b6c5f0d6?auto=format&fit=crop&w=800&q=80",
    categories: ["Berries"],
  },
  {
    name: "Blueberries",
    description: "Deliciously tangy dried blueberries.",
    benefits: [
      "Antioxidants (including polyphenols)",
      "Source of fiber",
      "Naturally sweet snack",
    ],
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    categories: ["Berries"],
  },
  {
    name: "Grapes (Raisins)",
    description: "Naturally sweet and chewy raisins.",
    benefits: [
      "Source of iron and potassium",
      "Fiber to support digestion",
      "Quick on-the-go energy",
    ],
    image:
      "https://images.unsplash.com/photo-1603048297171-08c8b0d34d9e?auto=format&fit=crop&w=800&q=80",
    categories: ["Classics"],
  },
  {
    name: "Kiwi Slices",
    description: "Tropical tangy dried kiwi slices.",
    benefits: [
      "Very high in Vitamin C",
      "Actinidin enzyme may aid digestion",
      "Vitamin K source",
    ],
    image:
      "https://images.unsplash.com/photo-1587731540032-87e8e4c4d6ac?auto=format&fit=crop&w=800&q=80",
    categories: ["Tropical"],
  },
  {
    name: "Papaya Chunks",
    description: "Sweet tropical dried papaya chunks.",
    benefits: [
      "Papain enzyme supports digestion",
      "Vitamins A and C",
      "Naturally low in fat",
    ],
    image:
      "https://images.unsplash.com/photo-1587731540018-43f3d13a6b34?auto=format&fit=crop&w=800&q=80",
    categories: ["Tropical"],
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative text-center py-20 px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576402187871-4c6ecf81c8f3?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-yellow-100 bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-md text-yellow-900">
            Yeshi&apos;s Fruit Craft
          </h1>
          <p className="text-2xl italic text-yellow-800 drop-shadow-sm">
            It&apos;s Drylicious
          </p>
          <p className="mt-6 text-gray-800 text-lg sm:text-xl leading-relaxed font-medium bg-white bg-opacity-70 p-4 rounded-xl inline-block">
            💛 Thanks for supporting my small business — every order helps my
            dream grow.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Products
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-yellow-500 text-white shadow"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-4 text-center group"
            >
              {/* Image with hover zoom */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover transform transition duration-300 ease-out group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {product.description}
              </p>

              {/* Benefits */}
              <ul className="text-left text-gray-500 text-xs mt-3 mb-4 list-disc pl-4 space-y-1">
                {product.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>

              <a
                href={`mailto:ydema708@gmail.com?subject=Order%20Request%20for%20${encodeURIComponent(
                  product.name
                )}`}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-yellow-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          At Yeshi&apos;s Fruit Craft, we specialize in creating delicious and
          healthy dried fruit snacks. Our passion is to bring you natural
          sweetness in every bite — because here, it&apos;s Drylicious.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">
          We’d love to hear from you! For orders or inquiries, contact us via
          email or phone:
        </p>
        <div className="space-y-2">
          <a
            href="mailto:ydema708@gmail.com"
            className="block text-yellow-600 font-semibold underline"
          >
            ydema708@gmail.com
          </a>
          <a
            href="tel:+61412345678"
            className="block text-yellow-600 font-semibold underline"
          >
            +61 412 345 678
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Yeshi&apos;s Fruit Craft – It&apos;s
        Drylicious. All rights reserved.
      </footer>
    </div>
  );
}
