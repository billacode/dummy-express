const DatabaseController = require('./databaseController');
const parseDate = require('postgres-date')
let studentArr = [];

const createStudent = async (req, res) => {
    const { name, contactNo, email, university, course, startDate, 
        endDate, sponsor, files} = req.body;
    console.log(startDate);

    let start = new Date();
    let end = new Date();

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`INSERT INTO students (name, contactNo, email, university, course, startDate, 
            endDate, sponsor, files) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [name, contactNo, email, university, course, start, 
                end, sponsor, files]);
    
        DatabaseController.disconnectDb();
        res.json({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const getStudent = async (req, res) => {
    const { id } = req.query;
    console.log(id)

    try {
        DatabaseController.connectDb();
        let response = null;

        if (id) {
            response = await DatabaseController.query(`select * from students where id=$1`, [id]);
        } else {
            response = await DatabaseController.query(`select * from students`);
        }
    
        DatabaseController.disconnectDb();
        res.json({message: response.rows});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const updateStudent = (req, res) => {
    studentArr.push(req.body);
    console.log(req.body)
    console.log(studentArr)
    res.send('sucess')
}

const deleteStudent = (req, res) => {
    studentArr.push(req.body);
    console.log(req.body)
    console.log(studentArr)
    res.send('sucess')
}

module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}