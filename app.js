var app = require('./config/express')();

app.get('/catalogo', function (req, res) {
    res.render('roldanas/catalogo');
});

app.listen(3000, function () {
    console.log('started');
})