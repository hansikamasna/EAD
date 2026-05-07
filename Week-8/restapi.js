const express = require('express')

const app = express()

app.use(express.json())

let students = [
  { id: 1, name: 'Rahul', course: 'CSE' },
  { id: 2, name: 'Sneha', course: 'ECE' }
]

app.get('/students', (req, res) => {
  res.json(students)
})

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id)

  if (!student) {
    return res.status(404).json({ message: 'Student Not Found' })
  }

  res.json(student)
})

app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course
  }

  students.push(newStudent)

  res.status(201).json(newStudent)
})

app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id)

  if (!student) {
    return res.status(404).json({ message: 'Student Not Found' })
  }

  student.name = req.body.name
  student.course = req.body.course

  res.json(student)
})

app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id)

  res.json({ message: 'Student Deleted' })
})

app.listen(3000, () => {
  console.log('REST API Running')
})