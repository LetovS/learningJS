const express = require('express');
const cors = require('cors');
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/v1/webhook', async (req, res) => {
    const { secret } = req.query;
    try {
        const response = await fetch(`https://localhost:5001/api/v1/webhook?secret=${secret}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
