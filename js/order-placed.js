

document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("orderProduct") || "Your product";
  const qty = localStorage.getItem("orderQty") || "1";
  const total = localStorage.getItem("orderPrice") || "—";

  document.getElementById("productName").textContent = name;
  document.getElementById("orderQty").textContent = `x${qty}`;
  document.getElementById("orderTotal").textContent = `$${total}`;

  // Generate a random order number
  const orderNum =
    "#ABK-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("orderNum").textContent = orderNum;

  // Clear cart & order data
  localStorage.removeItem("orderProduct");
  localStorage.removeItem("orderQty");
  localStorage.removeItem("orderPrice");
  localStorage.removeItem("cartCount");
});
