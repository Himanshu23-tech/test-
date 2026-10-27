
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "m1"
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected..");
})

function insertEmpData(name, salary) {
    const sql = "INSERT INTO emp(name, salary) VALUES(?, ?)";

    db.query(sql, [name, salary], (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Data Inserted: ", result.insertId)
        }
    })
}

function updateEmpData(name, salary, id) {
    const sql = "UPDATE emp SET name=?, salary=? WHERE id=?"

    db.query(sql, [name, salary, id], (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Data Updated...");
        }
    })
}

function deleteEmpData(id) {
    const sql = "DELETE FROM emp WHERE id=?"

    db.query(sql, [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Data Deleted...");
        }
    })
}

function displayEmpData() {
    const sql = "SELECT * FROM emp"

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Employee Data:");
            console.log(result);
        }
    })
}

insertEmpData("tom", 12000)
// updateEmpData("harry", 30000, 1)
// deleteEmpData(1)
 displayEmpData()
