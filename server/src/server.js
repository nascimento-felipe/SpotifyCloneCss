const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: error.message
    })
});

app.listen(3000);