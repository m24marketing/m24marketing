// تفعيل الوضع الليلي وتخزين الإعداد
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggleDarkMode");
    const body = document.body;

    // استرجاع حالة الوضع الليلي من localStorage
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }

    // تبديل الوضع الليلي عند النقر على الزر
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
    });
});

// زر الرجوع للأعلى
window.onscroll = function () {
    let scrollTopButton = document.getElementById("scrollTop");
    if (document.documentElement.scrollTop > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

document.getElementById("scrollTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// تكامل الذكاء الصناعي - تحليل الأسئلة والرد عليها
document.addEventListener("DOMContentLoaded", function () {
    fetch("api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request: "تحديث الموقع وتحليل البيانات" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("ai-content").innerHTML = data.ai_response;
    })
    .catch(error => console.error("خطأ في جلب بيانات الذكاء الصناعي:", error));
});
