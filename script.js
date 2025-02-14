// تفعيل الوضع الليلي
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// استرجاع الوضع الليلي المخزن
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

// نموذج التفاعل الذكي مع المستخدم
document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let userMessage = document.getElementById("chat-input").value;
    document.getElementById("chat-input").value = "";

    fetch("api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        let chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += `<p><strong>أنت:</strong> ${userMessage}</p>`;
        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.ai_response}</p>`;
    })
    .catch(error => console.error("خطأ في الرد الذكي:", error));
});
