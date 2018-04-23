const express = require('express');
const router = require('./routes/apiv1');

const app = express();

app.use('/api', router)

const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log("Server running....");
});

