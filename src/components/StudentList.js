import { useContext, useCallback, useMemo } from "react";
import { StudentContext } from "./StudentContext";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
  const { students, setStudents } = useContext(StudentContext);
  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => a.name.localeCompare(b.name));
  }, [students]);

  // Function to delete student
  const deleteStudent = useCallback((id) => {
    axios.delete(`https://67da45f535c87309f52bbd21.mockapi.io/api/hello/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch((err) => console.error(err));
  }, [students, setStudents]);

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/create">Add Student</Link>
      <ul>
        {sortedStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.mobile} - {student.status}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <Link to={`/edit/${student.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
