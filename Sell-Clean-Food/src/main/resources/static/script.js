document.addEventListener("DOMContentLoaded", () => {
  // Xu ly slide show header
  const listImages = document.querySelector(".list_img");
  const imgs = document.querySelectorAll(".imgs");
  const btnSlideLeft = document.querySelector(".btn_slides-left");
  const btnSlideRight = document.querySelector(".btn_slides-right");
  const indexItems = document.querySelectorAll(".index_item");

  const length = imgs.length;
  let current = 0;

  const updateSlide = function (index) {
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-width * index}px)`;
    document.querySelector(".index_active").classList.remove("index_active");
    indexItems[index].classList.add("index_active");
    current = index;
  };

  const handleChangeSlide = function () {
    current = (current + 1) % length;
    updateSlide(current);
  };

  let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

  btnSlideRight.addEventListener("click", function () {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
  });

  btnSlideLeft.addEventListener("click", function () {
    clearInterval(handleEventChangeSlide);
    if (current === 0) {
      current = length - 1;
    } else {
      current--;
    }
    updateSlide(current);
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
  });

  // Xu ly click cho tung index item
  indexItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      clearInterval(handleEventChangeSlide);
      updateSlide(index);
      handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
    });
  });

  // Xu ly navbar fixed khi scroll va tool scroll
  const tool = document.querySelector(".tool");
  const headerNavbar = document.querySelector(".header_nav");

  window.onscroll = function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      headerNavbar.classList.add("fixed");
      tool.style.display = "block";
    } else {
      headerNavbar.classList.remove("fixed");
      tool.style.display = "none";
    }
  };

  // Khi an vao nut, cuon len dau trang
  tool.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Xu ly search
  const search = document.querySelector(".search");
  const searchInput = document.querySelector(".search_input");
  const searchBtn = document.querySelector(".search_btn");

  search.onclick = function () {
    searchInput.classList.toggle("on_search");
    searchBtn.classList.toggle("on_search");
  };

  // Xu ly mau chu
  const productListItem1 = document.querySelector(".product_list_item1");
  const productListItem2 = document.querySelector(".product_list_item2");
  const productListItem3 = document.querySelector(".product_list_item3");

  productListItem1.onclick = function () {
    productListItem1.classList.add("change_text");
    productListItem2.classList.remove("change_text");
    productListItem3.classList.remove("change_text");
  };

  productListItem2.onclick = function () {
    productListItem1.classList.remove("change_text");
    productListItem2.classList.add("change_text");
    productListItem3.classList.remove("change_text");
  };

  productListItem3.onclick = function () {
    productListItem1.classList.remove("change_text");
    productListItem2.classList.remove("change_text");
    productListItem3.classList.add("change_text");
  };

  // Xu ly navbar voi mobile
  const closeNavbar = document.querySelector(".close_nav");
  const navbar = document.querySelector(".nav");
  const listMobile = document.querySelector(".icon_mobile");
  const navItem = document.querySelectorAll(".nav a");

  listMobile.onclick = function () {
    navbar.style.display = "block";
  };

  closeNavbar.onclick = function () {
    navbar.style.display = "none";
  };

  navItem.onclick = function () {
    navbar.style.display = "none";
  };
});
