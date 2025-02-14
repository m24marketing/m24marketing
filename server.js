const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname)); // تشغيل ملفات HTML
// نقطة نهاية لاستقبال بيانات الذكاء الصناعي
app.post('/api/update-data', (req, res) => {
    const receivedData = req.body;
    console.log("📊 بيانات مستلمة:", receivedData);
    res.json({
        message: "تم استلام البيانات بنجاح",
        status: "success"

app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});
