const express = require('express');
const router = express.Router();

router.get('/api/hello', (req, res)=> {
    res.send('Hello From Express')
})

router.post('/api/world', (req, res) => {
    const {input} = req.body;
    res.send({message: `I received your POST request. This is what you sent me: ${input}`})
})

module.exports = router