document.addEventListener("DOMContentLoaded", () => {
  const ALL_PRODUCTS = [
    {
      id: 1,
      name: "OKAZU Lovers Set (230ml/12 jars)",
      brand: "OKAZU",
      category: "Sets",
      price: 135.0,
      originalPrice: 267.0,
      rating: 4.5,
      reviews: 32,
      badge: "Sale",
      tags: ["vegan", "non-gmo", "in-stock", "sale"],
      description:
        "The ultimate OKAZU experience — a full set of 12 jars of our signature Japanese condiment sauce. Crafted with traditional ingredients, this bulk set is perfect for households that can't get enough of that rich, savory umami flavor. Great for gifting or stocking up the pantry. Your new cooking BFF! You can add this to virtually everything. Try it on rice, on meat or tofu, in your burger, ramen and pretty much anything. These award winning products will have your taste buds lingering for more...and potentially create an addiction.",
      images: [
        "https://placehold.co/400x400/f5f5f5/333?text=OKAZU+Set+1",
        "https://placehold.co/400x400/f5f5f5/333?text=OKAZU+Set+2",
        "https://placehold.co/400x400/f5f5f5/333?text=OKAZU+Set+3",
      ],
      reviews_list: [
        {
          name: "Sarah M.",
          stars: 5,
          date: "Jan 12, 2024",
          text: "Absolutely love this set! Great value and the miso sauce goes with everything.",
        },
        {
          name: "James T.",
          stars: 4,
          date: "Dec 3, 2023",
          text: "Quality product, arrived well-packed. Would buy again.",
        },
        {
          name: "Linda K.",
          stars: 5,
          date: "Nov 18, 2023",
          text: "Best gift I've given — my whole family is obsessed!",
        },
      ],
    },
    {
      id: 2,
      name: "OKAZU – Chili Miso (230ml)",
      brand: "OKAZU",
      category: "Condiments",
      price: 13.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 24,
      badge: "Best Seller",
      tags: ["vegan", "non-gmo", "in-stock"],
      description:
        "A fiery twist on a Japanese classic. This chili miso oil combines the deep, fermented richness of traditional miso with bold chili heat. Drizzle over rice, noodles, tofu, or eggs for an instant umami upgrade. One jar and you'll never go back.",
      images: [
        "https://placehold.co/400x400/f5f5f5/333?text=Chili+Miso+1",
        "https://placehold.co/400x400/f5f5f5/333?text=Chili+Miso+2",
        "https://placehold.co/400x400/f5f5f5/333?text=Chili+Miso+3",
      ],
      reviews_list: [
        {
          name: "Alex R.",
          stars: 5,
          date: "Feb 2, 2024",
          text: "Incredible depth of flavor. I put this on everything!",
        },
        {
          name: "Priya N.",
          stars: 4,
          date: "Jan 25, 2024",
          text: "Perfect level of heat. Very authentic taste.",
        },
      ],
    },
    {
      id: 3,
      name: "Instant Miso Soup Tasting Set",
      brand: "MisoMaster",
      category: "Soups",
      price: 19.99,
      originalPrice: 24.0,
      rating: 4.0,
      reviews: 24,
      badge: null,
      tags: ["vegan", "gluten-free", "in-stock", "sale"],
      description:
        "Discover the world of miso in one box. This tasting set includes a curated selection of instant miso soup varieties — from white shiro miso to hearty red miso — each crafted for authentic flavor in minutes. A cozy, comforting staple for any kitchen.",
      images: [
        "https://placehold.co/400x400/f5f5f5/333?text=Miso+Soup+1",
        "https://placehold.co/400x400/f5f5f5/333?text=Miso+Soup+2",
      ],
      reviews_list: [
        {
          name: "Tom W.",
          stars: 4,
          date: "Mar 1, 2024",
          text: "Great variety! Love being able to try all the flavors.",
        },
        {
          name: "Nina S.",
          stars: 4,
          date: "Feb 14, 2024",
          text: "Quick and tasty. Good for busy mornings.",
        },
      ],
    },
    {
      id: 4,
      name: "ABO Matcha: Uji Matcha, Organic, Ceremonial Grade",
      brand: "ABO Matcha",
      category: "Tea",
      price: 34.0,
      originalPrice: null,
      rating: 4.5,
      reviews: 24,
      badge: null,
      tags: ["organic", "vegan", "gluten-free", "in-stock"],
      description:
        "Sourced from the legendary tea fields of Uji, Kyoto, this ceremonial-grade matcha is stone-ground to a silky-smooth powder. Certified organic with a naturally sweet, umami-forward taste and vibrant green color. Ideal for traditional whisked tea, lattes, or premium baking.",
      images: [
        "https://placehold.co/400x400/f5f5f5/333?text=ABO+Matcha+1",
        "https://placehold.co/400x400/f5f5f5/333?text=ABO+Matcha+2",
        "https://placehold.co/400x400/f5f5f5/333?text=ABO+Matcha+3",
      ],
      reviews_list: [
        {
          name: "Yuki H.",
          stars: 5,
          date: "Mar 5, 2024",
          text: "The most vibrant, smooth matcha I've tried outside Japan.",
        },
        {
          name: "Emma L.",
          stars: 4,
          date: "Feb 28, 2024",
          text: "Beautiful color, delicate flavor. Worth every penny.",
        },
      ],
    },
    {
      id: 5,
      name: "OKAZU – White Miso Paste (500g)",
      brand: "OKAZU",
      category: "Condiments",
      price: 11.99,
      originalPrice: null,
      rating: 4.2,
      reviews: 18,
      badge: null,
      tags: ["vegan", "non-gmo", "in-stock"],
      description:
        "Classic white shiro miso paste made with the finest soybeans and rice. Mild, slightly sweet, and incredibly versatile — perfect for soups, marinades, dressings, and glazes.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=White+Miso"],
      reviews_list: [
        {
          name: "Carl B.",
          stars: 4,
          date: "Jan 8, 2024",
          text: "Great quality miso, very authentic taste.",
        },
      ],
    },
    {
      id: 6,
      name: "OKAZU – Red Miso Paste (500g)",
      brand: "OKAZU",
      category: "Condiments",
      price: 11.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 15,
      badge: null,
      tags: ["vegan", "non-gmo", "in-stock"],
      description:
        "Rich, bold red miso paste aged longer for a deeper, more complex umami flavor. Ideal for hearty soups, ramen broth, and robust sauces.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Red+Miso"],
      reviews_list: [
        {
          name: "Maya R.",
          stars: 5,
          date: "Dec 10, 2023",
          text: "My ramen has never been better. This is the real deal.",
        },
      ],
    },
    {
      id: 7,
      name: "ABO Matcha Latte Mix (200g)",
      brand: "ABO Matcha",
      category: "Tea",
      price: 22.0,
      originalPrice: 28.0,
      rating: 4.4,
      reviews: 30,
      badge: "Sale",
      tags: ["organic", "vegan", "in-stock", "sale"],
      description:
        "A perfectly balanced matcha latte blend — ceremonial-grade matcha with a touch of organic coconut sugar for natural sweetness. Just add hot milk or your favourite plant-based alternative.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Matcha+Latte"],
      reviews_list: [
        {
          name: "Olivia P.",
          stars: 5,
          date: "Feb 20, 2024",
          text: "My morning routine is now complete. Obsessed!",
        },
      ],
    },
    {
      id: 8,
      name: "Abokichi Miso Cookbook",
      brand: "Abokichi",
      category: "Snacks",
      price: 24.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 41,
      badge: "New",
      tags: ["in-stock"],
      description:
        "Unlock 60+ creative miso-inspired recipes developed by the Abokichi team. From weeknight dinners to show-stopping desserts, this cookbook will transform how you cook with miso.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Cookbook"],
      reviews_list: [
        {
          name: "Rachel G.",
          stars: 5,
          date: "Mar 3, 2024",
          text: "Every recipe I've tried has been a hit. Worth every cent!",
        },
      ],
    },
    {
      id: 9,
      name: "OKAZU Sesame Miso Sauce (230ml)",
      brand: "OKAZU",
      category: "Condiments",
      price: 14.99,
      originalPrice: null,
      rating: 4.1,
      reviews: 12,
      badge: null,
      tags: ["vegan", "non-gmo", "in-stock"],
      description:
        "A nutty, creamy sesame miso sauce that works as a dressing, dip, or marinade. Made with real toasted sesame and premium miso for a depth that elevates any dish.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Sesame+Miso"],
      reviews_list: [],
    },
    {
      id: 10,
      name: "Instant Dashi Broth Set",
      brand: "MisoMaster",
      category: "Soups",
      price: 16.99,
      originalPrice: 20.0,
      rating: 4.0,
      reviews: 9,
      badge: "Sale",
      tags: ["gluten-free", "in-stock", "sale"],
      description:
        "A selection of authentic Japanese dashi broth sachets — kombu, bonito, and shiitake varieties. The foundation of countless Japanese dishes, now at your fingertips.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Dashi+Broth"],
      reviews_list: [],
    },
    {
      id: 11,
      name: "ABO Matcha Ceremonial Tin (100g)",
      brand: "ABO Matcha",
      category: "Tea",
      price: 48.0,
      originalPrice: null,
      rating: 4.9,
      reviews: 55,
      badge: null,
      tags: ["organic", "vegan", "keto", "gluten-free", "in-stock"],
      description:
        "The pinnacle of matcha quality. Stone-ground from first-harvest Uji leaves into an impossibly fine powder. Presented in a beautiful reusable tin. For the matcha connoisseur.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Matcha+Tin"],
      reviews_list: [
        {
          name: "Kenji M.",
          stars: 5,
          date: "Mar 6, 2024",
          text: "This is the best matcha I have ever had. Period.",
        },
      ],
    },
    {
      id: 12,
      name: "OKAZU Gift Set – Holiday Edition",
      brand: "OKAZU",
      category: "Sets",
      price: 89.0,
      originalPrice: 120.0,
      rating: 4.7,
      reviews: 20,
      badge: "Sale",
      tags: ["vegan", "non-gmo", "in-stock", "sale"],
      description:
        "The perfect holiday gift for food lovers. Includes our most-loved miso sauces, a set of recipe cards, and a handcrafted gift box. Ships in premium packaging.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Holiday+Set"],
      reviews_list: [],
    },
    {
      id: 13,
      name: "Miso Ramen Broth Concentrate (500ml)",
      brand: "MisoMaster",
      category: "Soups",
      price: 12.49,
      originalPrice: null,
      rating: 4.3,
      reviews: 16,
      badge: null,
      tags: ["vegan", "in-stock"],
      description:
        "Restaurant-quality ramen broth concentrate. Rich, complex, and deeply savory — just dilute with water and add your favourite toppings for a bowl that rivals any ramen shop.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Ramen+Broth"],
      reviews_list: [],
    },
    {
      id: 14,
      name: "OKAZU Yuzu Miso Dressing (230ml)",
      brand: "OKAZU",
      category: "Condiments",
      price: 13.49,
      originalPrice: null,
      rating: 4.0,
      reviews: 8,
      badge: "New",
      tags: ["vegan", "non-gmo", "in-stock"],
      description:
        "Bright, citrusy yuzu meets deep miso umami in this light, versatile dressing. Drizzle over salads, grilled fish, or steamed vegetables for a Japanese-inspired finish.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Yuzu+Miso"],
      reviews_list: [],
    },
    {
      id: 15,
      name: "ABO Matcha Cooking Grade (300g)",
      brand: "ABO Matcha",
      category: "Tea",
      price: 18.0,
      originalPrice: null,
      rating: 3.9,
      reviews: 7,
      badge: null,
      tags: ["organic", "vegan", "in-stock"],
      description:
        "High-quality cooking-grade matcha at an everyday price. Perfect for baking, smoothies, ice cream, and any recipe where you want that vibrant green colour and earthy flavour.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Cooking+Matcha"],
      reviews_list: [],
    },
    {
      id: 16,
      name: "Abokichi Miso Snack Crackers",
      brand: "Abokichi",
      category: "Snacks",
      price: 7.99,
      originalPrice: null,
      rating: 4.2,
      reviews: 22,
      badge: null,
      tags: ["vegan", "in-stock"],
      description:
        "Light, crispy crackers baked with real miso for a savoury, umami-rich snack. Great on their own or paired with cheese and dips. Naturally addictive.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Miso+Crackers"],
      reviews_list: [],
    },
    {
      id: 17,
      name: "OKAZU Triple Pack – Mixed Miso (230ml x3)",
      brand: "OKAZU",
      category: "Sets",
      price: 39.0,
      originalPrice: 50.0,
      rating: 4.6,
      reviews: 33,
      badge: "Sale",
      tags: ["vegan", "non-gmo", "in-stock", "sale"],
      description:
        "Can't choose just one? Get three. This mixed pack includes our Chili Miso, White Miso, and Sesame Miso sauces — the perfect trio to explore the full OKAZU range.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Triple+Pack"],
      reviews_list: [],
    },
    {
      id: 18,
      name: "Abokichi Miso Caramel Sauce (250ml)",
      brand: "Abokichi",
      category: "Condiments",
      price: 15.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 28,
      badge: "New",
      tags: ["vegan", "gluten-free", "in-stock"],
      description:
        "Sweet meets savoury in the most irresistible way. Our miso caramel sauce is handcrafted with organic miso and pure cane sugar — pour over ice cream, pancakes, or use as a glaze for roasted vegetables.",
      images: ["https://placehold.co/400x400/f5f5f5/333?text=Miso+Caramel"],
      reviews_list: [],
    },
  ];

  // ── get product from URL param ──
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id")) || 1;
  const product =
    ALL_PRODUCTS.find((p) => p.id === productId) || ALL_PRODUCTS[0];

  function stars(r) {
    const full = Math.floor(r);
    const half = r % 1 >= 0.5 ? 1 : 0;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
  }

  // ── Populate page ──
  document.title = product.name + " – Abokichi";
  document.getElementById("breadcrumb-name").textContent = product.name;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("priceNow").textContent =
    "$" + product.price.toFixed(2);
  document.getElementById("starsEl").textContent = stars(product.rating);
  document.getElementById("reviewCount").textContent =
    product.reviews + " Reviews";
  document.getElementById("productDesc").textContent = product.description;
  document.getElementById("tabDesc").textContent = product.description;

  if (product.originalPrice) {
    document.getElementById("priceOld").textContent =
      "$" + product.originalPrice.toFixed(2);
  }


  // Gallery
  const mainImg = document.getElementById("mainImg");
  mainImg.src = product.images[0];
  const thumbList = document.getElementById("thumbList");
  let activeThumb = 0;

  product.images.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "thumb" + (i === 0 ? " active" : "");
    div.innerHTML = `<img src="${src}" alt="thumb ${i + 1}">`;
    div.addEventListener("click", () => {
      mainImg.src = src;
      document
        .querySelectorAll(".thumb")
        .forEach((t) => t.classList.remove("active"));
      div.classList.add("active");
      activeThumb = i;
    });
    thumbList.appendChild(div);
  });

  document.getElementById("prevThumb").addEventListener("click", () => {
    activeThumb =
      (activeThumb - 1 + product.images.length) % product.images.length;
    mainImg.src = product.images[activeThumb];
    document
      .querySelectorAll(".thumb")
      .forEach((t, i) => t.classList.toggle("active", i === activeThumb));
  });
  document.getElementById("nextThumb").addEventListener("click", () => {
    activeThumb = (activeThumb + 1) % product.images.length;
    mainImg.src = product.images[activeThumb];
    document
      .querySelectorAll(".thumb")
      .forEach((t, i) => t.classList.toggle("active", i === activeThumb));
  });

  // Cart counter
  let cartCount = parseInt(localStorage.getItem("cartCount") || "0");
  function updateBadge() {
    const badge = document.getElementById("cartBadge");
    badge.textContent = cartCount;
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 200);
    localStorage.setItem("cartCount", cartCount);
  }
  updateBadge();

  // Quantity
  window.changeQty = function (delta) {
    const input = document.getElementById("qtyInput");
      const current = parseInt(input.value) || 0;
    const val = Math.max(0, Math.min(99, current + delta));
    input.value = val;
  };

  window.addToCart = function () {
    const qty = parseInt(document.getElementById("qtyInput").value);
    cartCount += qty;
    updateBadge();
  };

  window.buyNow = function () {
    const qty = parseInt(document.getElementById("qtyInput").value);
    localStorage.setItem("orderProduct", product.name);
    localStorage.setItem("orderQty", qty);
    localStorage.setItem("orderPrice", (product.price * qty).toFixed(2));
    window.location.href = "order-placed.html";
  };
});
