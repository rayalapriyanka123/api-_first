const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const studentList = [{
        id: 1,
        name: "priyanka",
        age: 21,
        dept: 'IT'
    },
    {
        id: 2,
        name: "virat",
        age: 23,
        dept: 'IT'
    },
    {
        id: 3,
        name: "saathi",
        age: 20,
        dept: 'IT'
    },
    {
        id: 4,
        name: "sreeja",
        age: 21,
        dept: 'IT'
    }
];
app.get('/api/index', (req, resp) => {
    resp.json(studentList);

});
app.post('/api/create', (req, resp) => {
    const newStudent = {
        ...req.body,
        id: studentList.length + 1
    };
    studentList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);
});
//to delete a request
app.delete('/api/delete/:id', (req,resp) => {
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentList.findIndex(student => student.id === idToBeDeleted);
    studentList.splice(studentToBeDeleted, 1);
    resp.json(idToBeDeleted);
});
//to get the deleted request
app.get('/api/delete/:id', (req, resp) => {
    const idToBeFeteched = parseInt(req.params.id);
    const studentToBeFeteched = studentList.find(student => student.id === idToBeFeteched);
    resp.json(studentToBeFeteched);
});
app.listen(3000);