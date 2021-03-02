const express = require('express');
const router = express.Router();

const mysqlConnection = require('../databse');

router.get('/', (req, res, next) =>{
    mysqlConnection.query('SELECT * FROM employees', (error, rows, fields) =>{
        if (!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});


module.exports = router;