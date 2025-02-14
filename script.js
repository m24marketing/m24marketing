// ✅ تفعيل الوضع الليلي
document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// ✅ استعادة الوضع الليلي عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// ✅ زر الرجوع للأعلى
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

// ✅ جلب تحديثات الذكاء الاصطناعي من API
document.addEventListener("DOMContentLoaded", function() {
    fetch("api.php", { // استبدل بـ "http://localhost:3000/api" إذا كنت تستخدم Node.js
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request: "تحديث الموقع" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("ai-content").innerHTML = data.ai_response;
    })
    .catch(error => console.error("❌ خطأ في جلب بيانات الذكاء الاصطناعي:", error));
});
