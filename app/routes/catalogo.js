module.exports = function (app) {
    app.get('/catalogo', function (req, res) {


        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'roldana.chtd4y9zgelt.us-east-1.rds.amazonaws.com',
            user: 'root',
            password: 'Pa$$4eit',
            database: 'roldanaDB'
        })


        connection.query('SELECT * FROM roldonas', function (error, results) {
            if (error) throw error;
            // console.log('Conexão com o banco falhou', results);
            res.render('roldanas/catalogo', {
                resultsHTML: results
            })

        });

        connection.end();

        // res.render('roldanas/catalogo');
    });
}