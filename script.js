// 🔄 تفعيل الوضع الليلي
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // حفظ التفضيلات في LocalStorage حتى لا يختفي عند إعادة تحميل الصفحة
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// ✅ استرجاع إعداد الوضع الليلي تلقائيًا عند تحميل الصفحة
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}


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
