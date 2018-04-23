const express = require('express');
const router = require('./routes/apiv1');

const app = express();

app.use('/api', router)

const server = app.listen(8080, () => {
    console.log("Server running....");
});

