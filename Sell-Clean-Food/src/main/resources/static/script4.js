//Thêm vào giỏ hàng
function addToCart(name, price, imageUrl) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find((product) => product.name === name);
  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    const product = { name, price, quantity: 1 };
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartNumber();
  displayCartItems();
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(index, newQuantity) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = parseInt(newQuantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

// Hàm hiển thị số lượng sản phẩm trong giỏ hàng
function updateCartNumber() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector(".cart_number").textContent = cart.length;
}

// Hàm hiển thị danh sách sản phẩm trong giỏ hàng
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTableBody = document.getElementById("show");
  const totalAmountElement = document.getElementById("total_amount");

  if (cartTableBody) {
    cartTableBody.innerHTML = "";

    if (cart.length === 0) {
      cartTableBody.innerHTML =
        "<tr><td colspan='4'>Giỏ hàng của bạn trống!</td></tr>";
      if (totalAmountElement) {
        totalAmountElement.textContent = "0 VND";
      }
      return;
    }

    let totalAmount = 0;

    cart.forEach((product, index) => {
      const productTotal = product.price * product.quantity;
      totalAmount += productTotal;
      const row = `
        <tr>
          <td>${product.name}</td>
          <td>${product.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}</td>
          <td>
            <input type="number" value="${
              product.quantity
            }" min="1" onchange="updateQuantity(${index}, this.value)">
          </td>
          <td>${productTotal.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}</td>
        </tr>
      `;
      cartTableBody.insertAdjacentHTML("beforeend", row);
    });

    if (totalAmountElement) {
      totalAmountElement.textContent = totalAmount.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    }
  }
  updateCartTotal();
}

// Hàm tính tổng tiền của giỏ hàng
function updateCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1), // 0 + giá của sản phẩm
    0
  );
  const cartTotalElement = document.getElementById("cart-total");
  if (cartTotalElement) {
    cartTotalElement.textContent = total.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND", //chỉ định ngôn ngữ và định dạng cho Việt Nam
    });
  }
}

// Sự kiện click cho các nút "Thêm vào giỏ hàng"
document.addEventListener("DOMContentLoaded", () => {
  // Cập nhật hiển thị số lượng giỏ hàng khi tải trang
  updateCartNumber();

  // Hiển thị các sản phẩm trong giỏ hàng khi tải trang
  displayCartItems();
});
