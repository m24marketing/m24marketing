const express = require('express');
const app = express();
app.use(express.json());

app.post('/api', (req, res) => {
    const userData = req.body;
    res.json({
        status: "success",
        message: "تم استقبال البيانات بنجاح",
        ai_response: "هذه استجابة الذكاء الصناعي للموقع."
    });
});

app.listen(3000, () => console.log("API يعمل على المنفذ 3000"));
