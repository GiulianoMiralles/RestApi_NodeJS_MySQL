const express = require('express');
const router = express.Router();

const mysqlConnection = require('../databse');

router.get('/', (req, res, next) => {
    mysqlConnection.query('SELECT * FROM employees', (error, rows, fields) => {
        if (!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (error, rows, fields) => {
        if (!error) {
            res.json(rows[0]);
        } else {
            console.log(error);
        }
    });
});

router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    const query = `CALL  employeeAddOEdit(?, ?, ?);`; // The signs refer to the id name and salary parameters
    mysqlConnection.query(query, [id, name, salary], (error, rows, fileds) => {
        if (!error) {
            res.json({ Status: 'Employeed Saved' });
        } else {
            console.log(error);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    const query = `CALL  employeeAddOEdit(?, ?, ?);`;
    mysqlConnection.query(query, [id, name, salary], (error, rows, fields) => {
        if (!error) {
            res.json({ Status: 'Employeed updated' });
        } else {
            console.log(error);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (error, rows, fields) => {
        if (!error) {
            res.json({ Status: 'Employeed deleted' });
        } else {
            console.log(error);
        }
    });
});


module.exports = router;