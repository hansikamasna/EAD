import React from 'react';

function StudentTable() {
  const students = [
    {
      id: 1,
      name: 'Rahul',
      course: 'CSE',
      marks: 85
    },
    {
      id: 2,
      name: 'Sneha',
      course: 'ECE',
      marks: 92
    },
    {
      id: 3,
      name: 'Arjun',
      course: 'IT',
      marks: 78
    },
    {
      id: 4,
      name: 'Priya',
      course: 'MECH',
      marks: 88
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Table</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;