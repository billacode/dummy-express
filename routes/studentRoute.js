const express = require("express");
const studentRouter = express.Router();
const StudentController = require('../controllers/studentController');

studentRouter.get('/', StudentController.getStudent);

studentRouter.post('/', StudentController.createStudent);

studentRouter.patch('/', StudentController.updateStudent);

studentRouter.delete('/', StudentController.deleteStudent);

module.exports = studentRouter;