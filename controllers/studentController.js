const DatabaseController = require('./databaseController');

const createStudent = async (req, res) => {
    const { name, contactNo, email, university, course, startDate, 
        endDate, sponsor, files} = req.body;

        let start = startDate ? new Date(startDate) : new Date();
        let end = endDate ? new Date(endDate) : new Date();
    
        let fileArr = files ? files : [];
        console.log(files);

    try {
        const response = await DatabaseController.query(`INSERT INTO students (name, "contactNo", email, university, course, "startDate", 
            "endDate", sponsor, files) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [name, contactNo, email, university, course, start, 
                end, sponsor, fileArr]);
    
        res.json({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const getStudent = async (req, res) => {
    const { id } = req.query;
    console.log(id)

    try {
        let response = null;

        if (id) {
            response = await DatabaseController.query(`select * from students where id=$1`, [id]);
        } else {
            response = await DatabaseController.query(`select * from students order by id ASC`);
        }
    
        res.json({message: response && response.rows ? response.rows : []});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const updateStudent = async (req, res) => {
    const { id } = req.query;
    const { name, contactNo, email, university, course, startDate, 
        endDate, sponsor, files} = req.body;

    let start = startDate ? new Date(startDate) : new Date();
    let end = endDate ? new Date(endDate) : new Date();

    let fileArr = files ? files : [];
    console.log(files);

    try {
        const response = await DatabaseController.query(`UPDATE students SET name=$1, "contactNo"=$2, email=$3, university=$4,
        course=$5, "startDate"=$6, "endDate"=$7, sponsor=$8, files=$9
        WHERE id=$10`, [name, contactNo, email, university, course, start, end, sponsor, fileArr, id]);
    
        res.send({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.query;

    try {
        const response = await DatabaseController.query(`DELETE FROM students WHERE id=$1`, [id]);
    
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