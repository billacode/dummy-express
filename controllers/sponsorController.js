const DatabaseController = require('./databaseController');

const createSponsor = async (req, res) => {
    const { name, contactNo, email, files} = req.body;

    let fileArr = files ? files : [];
    console.log(files);

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`INSERT INTO sponsors (name, "contactNo", email, files) 
        VALUES($1, $2, $3, $4)`, [name, contactNo, email, fileArr]);
    
        DatabaseController.disconnectDb();
        res.json({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const getSponsor = async (req, res) => {
    const { id } = req.query;
    console.log(id)

    try {
        DatabaseController.connectDb();
        let response = null;

        if (id) {
            response = await DatabaseController.query(`select * from sponsors where id=$1`, [id]);
        } else {
            response = await DatabaseController.query(`select * from sponsors order by id ASC`);
        }
    
        DatabaseController.disconnectDb();
        res.json({message: response && response.rows ? response.rows : []});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const updateSponsor = async (req, res) => {
    const { id } = req.query;
    const { name, contactNo, email, files} = req.body;

    let fileArr = files ? files : [];
    console.log(files);

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`UPDATE sponsors SET name=$1, "contactNo"=$2, email=$3, files=$4
        WHERE id=$5`, [name, contactNo, email, fileArr, id]);
    
        DatabaseController.disconnectDb();
        res.send({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

const deleteSponsor = async (req, res) => {
    const { id } = req.query;

    try {
        DatabaseController.connectDb();
        const response = await DatabaseController.query(`DELETE FROM sponsors WHERE id=$1`, [id]);
    
        DatabaseController.disconnectDb();
        res.send({message: response});
    } catch (e) {
        res.json({error: e, message: e.message});
    }
}

module.exports = {
    createSponsor,
    getSponsor,
    updateSponsor,
    deleteSponsor
}