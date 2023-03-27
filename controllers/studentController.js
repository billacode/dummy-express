const DatabaseController = require('./databaseController');

const createStudent = async (req, res) => {
    const { name, contactNo, email, university, course, startDate, 
        endDate, sponsor, files} = req.body;

    let start = new Date();
    let end = new Date();

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`INSERT INTO students (name, "contactNo", email, university, course, "startDate", 
            "endDate", sponsor, files) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [name, contactNo, email, university, course, start, 
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
            response = await DatabaseController.query(`select * from students order by id ASC`);
        }
    
        DatabaseController.disconnectDb();
        res.json({message: response && response.rows ? response.rows : []});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const updateStudent = async (req, res) => {
    const { id } = req.query;
    const { name, contactNo, email, files} = req.body;

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`UPDATE students SET name=$1, "contactNo"=$2, email=$3, files=$4
        WHERE id=$5`, [name, contactNo, email, files, id]);
    
        DatabaseController.disconnectDb();
        res.send({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.query;

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`DELETE FROM students WHERE id=$1`, [id]);
    
        DatabaseController.disconnectDb();
        res.send({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}