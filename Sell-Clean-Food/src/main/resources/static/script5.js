document.addEventListener("DOMContentLoaded", () => {
  const cartIcon1 = document.querySelector("#icon1");
  const cartIcon2 = document.querySelector("#icon2");
  const cartIcon3 = document.querySelector("#icon3");
  const cartIcon4 = document.querySelector("#icon4");
  const cartIcon5 = document.querySelector("#icon5");
  const cartIcon6 = document.querySelector("#icon6");
  const cartIcon7 = document.querySelector("#icon7");
  const cartIcon8 = document.querySelector("#icon8");

  const cartNumber = document.querySelector(".cart_number");

  // Hàm thêm sản phẩm vào local storage
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng");
    updateCartNumber();
  }

  // Hàm cập nhật số lượng sản phẩm trong giỏ
  function updateCartNumber() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartNumber.textContent = cart.length;
  }

  // Thêm sự kiện click cho các biểu tượng giỏ hàng
  function setupAddToCart(icon, name) {
    if (icon) {
      icon.addEventListener("click", () => {
        const quantity = document.querySelector(".quantity_input").value;
        const product = {
          name: name,
          price: 12000,
          quantity: parseInt(quantity, 10),
        };
        addToCart(product);
      });
    }
  }

  setupAddToCart(cartIcon1, "NHO XANH");
  setupAddToCart(cartIcon2, "MỒNG TƠI");
  setupAddToCart(cartIcon3, "DỨA");
  setupAddToCart(cartIcon4, "CỦ DỀN");
  setupAddToCart(cartIcon5, "CAM CAO PHONG");
  setupAddToCart(cartIcon6, "CÀ CHUA");
  setupAddToCart(cartIcon7, "BƠ XANH");
  setupAddToCart(cartIcon8, "BÍ NGÔ");

  // Cập nhật số lượng sản phẩm khi tải trang
  updateCartNumber();

  // Hiển thị giỏ hàng
  displayCart();
});

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(index, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = parseInt(newQuantity, 10);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Hiển thị giỏ hàng
function displayCart() {
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
            }" min="1" onchange="updateQuantity(${index}, this.value)"  style = "width: 50px; height:30px">
          </td>
          <td>${productTotal.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}</td>
          <td><button onclick="removeFromCart(${index})" style = "background-color: #fff;
          border: none;
          font-size: 20px; cursor: pointer;">Xóa</button></td>
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
  //và tính tổng tiền
  updateCartTotal();
}

//và tính tổng tiền
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

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Xóa sản phẩm tại vị trí index
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartNumber(); // Cập nhật số lượng sản phẩm trong giỏ hàng
}
