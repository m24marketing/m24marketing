<?php
header("Content-Type: application/json");

$request = json_decode(file_get_contents("php://input"), true);

if (isset($request["message"])) {
    $userMessage = $request["message"];
    
    // الرد الذكي بناءً على السؤال
    $responses = [
        "ما هي خدماتكم؟" => "نحن نقدم خدمات التسويق بالذكاء الصناعي، تحسين SEO، وإدارة الحملات الإعلانية.",
        "كيف يمكنني الاشتراك؟" => "يمكنك الاشتراك من خلال التواصل معنا عبر البريد الإلكتروني أو واتساب."
    ];

    $aiResponse = $responses[$userMessage] ?? "عذرًا، لم أفهم سؤالك. يرجى توضيحه أكثر.";

    echo json_encode(["ai_response" => $aiResponse]);
} else {
    echo json_encode(["ai_response" => "مرحبا! كيف يمكنني مساعدتك؟"]);
}
?>
