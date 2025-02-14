const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // توفير ملفات HTML, CSS, JS

// ✅ عرض الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

// ✅ نقطة نهاية لاستقبال بيانات الذكاء الاصطناعي
app.post('/api/update-data', (req, res) => {
    const receivedData = req.body;
    console.log("📥 بيانات مستلمة:", receivedData);

    res.json({
        message: "✅ تم استقبال البيانات بنجاح",
        status: "success"
    });
});

// ✅ تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على: http://localhost:${PORT}`);
});
