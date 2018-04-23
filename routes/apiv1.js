const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {
    res.status(200);
    res.json( {'message' : 'AP1 V1'} );
});

module.exports = router;