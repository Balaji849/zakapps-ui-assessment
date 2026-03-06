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
    img: "https://placehold.co/200x200/f5f5f5/333?text=OKAZU+Set",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Chili+Miso",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Miso+Soup+Set",
  },
  {
    id: 4,
    name: "ABO Matcha: Uji Matcha, Organic",
    brand: "ABO Matcha",
    category: "Tea",
    price: 34.0,
    originalPrice: null,
    rating: 4.5,
    reviews: 24,
    badge: null,
    tags: ["organic", "vegan", "gluten-free", "in-stock"],
    img: "https://placehold.co/200x200/f5f5f5/333?text=ABO+Matcha",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=White+Miso",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Red+Miso",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Matcha+Latte",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Cookbook",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Sesame+Miso",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Dashi+Broth",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Matcha+Tin",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Holiday+Set",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Ramen+Broth",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Yuzu+Miso",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Cooking+Matcha",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Miso+Crackers",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Triple+Pack",
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
    img: "https://placehold.co/200x200/f5f5f5/333?text=Miso+Caramel",
  },
];

let activeFilters = { category: [], tag: [], brand: [], rating: [] };
let sortBy = "default";

function getFiltered() {
  return ALL_PRODUCTS.filter((p) => {
    if (
      activeFilters.category.length &&
      !activeFilters.category.includes(p.category)
    )
      return false;
    if (activeFilters.brand.length && !activeFilters.brand.includes(p.brand))
      return false;
    if (
      activeFilters.tag.length &&
      !activeFilters.tag.some((t) => p.tags.includes(t))
    )
      return false;
    if (activeFilters.rating.length) {
      const minRating = Math.min(...activeFilters.rating.map(Number));
      if (p.rating < minRating) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === "az") return a.name.localeCompare(b.name);
    if (sortBy === "za") return b.name.localeCompare(a.name);
    if (sortBy === "low") return a.price - b.price;
    if (sortBy === "high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });
}

function stars(r) {
  return "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
}

function render() {
  const products = getFiltered();
  const grid = document.getElementById("productsGrid");
  document.getElementById("productCount").textContent =
    `Products (${products.length})`;
  if (!products.length) {
    grid.innerHTML =
      '<div class="no-results">No products match your filters.</div>';
    return;
  }
  grid.innerHTML = products
    .map(
      (p) => `
    <a href="product-detail.html?id=${p.id}" class="product-card">
      ${p.badge ? `<div class="badge-wrap"><span class="badge ${p.badge === "New" ? "new" : p.badge === "Sale" ? "sale" : ""}">${p.badge}</span></div>` : ""}
      <div class="card-body">
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}</p>
        <h4>$${p.price.toFixed(2)}${p.originalPrice ? `<span class="old-price">$${p.originalPrice.toFixed(2)}</span>` : ""}</h4>
        <div class="rating">${stars(p.rating)} <span>${p.reviews} Reviews</span></div>
      </div>
    </a>`,
    )
    .join("");
}

function renderPills() {
  let html = "";
  ["category", "tag", "brand", "rating"].forEach((type) => {
    activeFilters[type].forEach((val) => {
      const label = type === "rating" ? `${val}+ stars` : val;
      html += `<div class="filter-pill">${label} <button onclick="removePill('${type}','${val}')">×</button></div>`;
    });
  });
  document.getElementById("activePills").innerHTML = html;
}

function removePill(type, val) {
  activeFilters[type] = activeFilters[type].filter((v) => v !== val);
  document.querySelectorAll(`[data-filter="${type}"]`).forEach((cb) => {
    if (cb.value === val) cb.checked = false;
  });
  render();
  renderPills();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggleFilter").addEventListener("click", () => {
    document.getElementById("filterPanel").classList.toggle("open");
  });

  document.querySelectorAll("[data-filter]").forEach((cb) => {
    cb.addEventListener("change", () => {
      const type = cb.dataset.filter;
      if (cb.checked) {
        if (!activeFilters[type].includes(cb.value))
          activeFilters[type].push(cb.value);
      } else {
        activeFilters[type] = activeFilters[type].filter((v) => v !== cb.value);
      }
      render();
      renderPills();
    });
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    sortBy = e.target.value;
    render();
  });

  document.getElementById("gridBtn").addEventListener("click", () => {
    document.getElementById("productsGrid").classList.remove("list-view");
    document.getElementById("gridBtn").classList.add("active");
    document.getElementById("listBtn").classList.remove("active");
  });

  document.getElementById("listBtn").addEventListener("click", () => {
    document.getElementById("productsGrid").classList.add("list-view");
    document.getElementById("listBtn").classList.add("active");
    document.getElementById("gridBtn").classList.remove("active");
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
    activeFilters = { category: [], tag: [], brand: [], rating: [] };
    document
      .querySelectorAll("[data-filter]")
      .forEach((cb) => (cb.checked = false));
    render();
    renderPills();
  });

  render();
  renderPills();
});
