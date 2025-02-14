// الوضع الليلي
document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// زر الرجوع للأعلى
window.onscroll = function() {
    let scrollTopButton = document.getElementById("scrollTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

document.getElementById("scrollTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
