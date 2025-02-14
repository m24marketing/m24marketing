<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// استقبال البيانات من الذكاء الصناعي (كمثال، تحليل طلبات المستخدمين)
$data = json_decode(file_get_contents("php://input"), true);

$response = [
    "status" => "success",
    "message" => "تم استقبال البيانات بنجاح",
    "ai_response" => "هذه استجابة الذكاء الصناعي للموقع."
];

echo json_encode($response);
?>
