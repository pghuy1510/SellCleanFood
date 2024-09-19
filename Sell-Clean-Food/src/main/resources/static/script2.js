document.addEventListener("DOMContentLoaded", function() {

    // Xu ly navbar fixed khi scroll va tool scroll
    const tool = document.querySelector('.tool');
    const headerNavbar = document.querySelector('.header_nav');

    window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerNavbar.classList.add("fixed");
        tool.style.display = "block";
    } else {
        headerNavbar.classList.remove("fixed");
        tool.style.display = "none";
    }
    };

    // Khi an vao nut, cuon len dau trang
    tool.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }

    // Xu ly search
    const search = document.querySelector('.search');
    const searchInput = document.querySelector('.search_input');
    const searchBtn = document.querySelector('.search_btn');

    search.onclick = function() {
        searchInput.classList.toggle('on_search');
        searchBtn.classList.toggle('on_search');
    };

    // Rating sao
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            resetStars();
            highlightStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', function() {
            resetStars();
            if (selectedRating) {
                highlightStars(selectedRating);
            }
        });

        star.addEventListener('click', function() {
            selectedRating = star.getAttribute('data-value');
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating) {
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    };

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    };

    // Xu ly chuyen trang trong thong tin san pham
    const fruitDesc = document.querySelector('.fruit_desc');
    const fruitOrigin = document.querySelector('.fruit_origin');
    const fruitStandard = document.querySelector('.fruit_standard');
    const fruitRate = document.querySelector('.fruit_rate');

    const fruitBox1 = document.querySelector('.fruit_box1');
    const fruitBox2 = document.querySelector('.fruit_box2');
    const fruitBox3 = document.querySelector('.fruit_box3');
    const fruitBox4 = document.querySelector('.fruit_box4');

    fruitDesc.onclick = function() {
        fruitDesc.classList.add('change_text');
        fruitOrigin.classList.remove('change_text');
        fruitStandard.classList.remove('change_text');
        fruitRate.classList.remove('change_text');

        fruitDesc.classList.add('change_fruit');
        fruitOrigin.classList.remove('change_fruit');
        fruitStandard.classList.remove('change_fruit');
        fruitRate.classList.remove('change_fruit');

        fruitBox1.style.display = 'block';
        fruitBox2.style.display = 'none';
        fruitBox3.style.display = 'none';
        fruitBox4.style.display = 'none';
    };

    fruitOrigin.onclick = function() {
        fruitDesc.classList.remove('change_text');
        fruitOrigin.classList.add('change_text');
        fruitStandard.classList.remove('change_text');
        fruitRate.classList.remove('change_text');

        fruitDesc.classList.remove('change_fruit');
        fruitOrigin.classList.add('change_fruit');
        fruitStandard.classList.remove('change_fruit');
        fruitRate.classList.remove('change_fruit');

        fruitBox1.style.display = 'none';
        fruitBox2.style.display = 'block';
        fruitBox3.style.display = 'none';
        fruitBox4.style.display = 'none';
    };

    fruitStandard.onclick = function() {
        fruitDesc.classList.remove('change_text');
        fruitOrigin.classList.remove('change_text');
        fruitStandard.classList.add('change_text');
        fruitRate.classList.remove('change_text');

        fruitDesc.classList.remove('change_fruit');
        fruitOrigin.classList.remove('change_fruit');
        fruitStandard.classList.add('change_fruit');
        fruitRate.classList.remove('change_fruit');

        fruitBox1.style.display = 'none';
        fruitBox2.style.display = 'none';
        fruitBox3.style.display = 'block';
        fruitBox4.style.display = 'none';
    };

    fruitRate.onclick = function() {
        fruitDesc.classList.remove('change_text');
        fruitOrigin.classList.remove('change_text');
        fruitStandard.classList.remove('change_text');
        fruitRate.classList.add('change_text');

        fruitDesc.classList.remove('change_fruit');
        fruitOrigin.classList.remove('change_fruit');
        fruitStandard.classList.remove('change_fruit');
        fruitRate.classList.add('change_fruit');

        fruitBox1.style.display = 'none';
        fruitBox2.style.display = 'none';
        fruitBox3.style.display = 'none';
        fruitBox4.style.display = 'block';
    };

    // Xu ly navbar voi mobile
    const closeNavbar = document.querySelector('.close_nav');
    const navbar = document.querySelector('.nav');
    const listMobile = document.querySelector('.icon_mobile');
    const navItem = document.querySelectorAll('.nav a');

    listMobile.onclick = function() {
        navbar.style.display = 'block';
    };

    closeNavbar.onclick = function() {
        navbar.style.display = 'none';
    };
    
    navItem.onclick = function() {
        navbar.style.display = 'none';
    }
});