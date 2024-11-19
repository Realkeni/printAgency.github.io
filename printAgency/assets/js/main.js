
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.getElementById("scrollTopBtn").addEventListener("click", scrollToTop);


document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.text-box', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.course-col', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.campus-col', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.facilities-col', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });
});


const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});


    function toggleMenu() {
        const navLinks = document.querySelector('nav-links');
        navLinks.classList.toggle('active');
    }
