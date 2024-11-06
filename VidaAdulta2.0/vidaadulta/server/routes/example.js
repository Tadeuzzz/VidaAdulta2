// routes/example.js
const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

module.exports = router;