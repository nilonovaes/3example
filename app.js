var app = require('./config/express')();

require('./app/routes/catalogo')(app);

app.listen(3000, function () {
    console.log('started');
})