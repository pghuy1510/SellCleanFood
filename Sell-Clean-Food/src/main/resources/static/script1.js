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