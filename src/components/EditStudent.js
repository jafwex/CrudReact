import { useState, useContext, useEffect } from "react";
import { StudentContext } from "./StudentContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { students, setStudents } = useContext(StudentContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const student = students.find((s) => s.id === id);
    if (student) {
      setName(student.name);
      setMobile(student.mobile);
      setStatus(student.status);
    }
  }, [id, students]);
  // prevents 
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://67da45f535c87309f52bbd21.mockapi.io/api/hello/students/${id}`, { name, mobile, status })
      .then(() => {
        setStudents(students.map((s) => (s.id === id ? { id, name, mobile, status } : s)));
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
