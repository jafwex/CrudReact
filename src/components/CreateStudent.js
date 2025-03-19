import { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
  

// have created this component for creating the new data and submit that data to an api
const CreateStudent = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("Present");
  // to update the list of stu in the global state after adding newone
  const { setStudents } = useContext(StudentContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://67da45f535c87309f52bbd21.mockapi.io/api/hello/students", { name, mobile, status })
      .then((res) => {
        setStudents((prev) => [...prev, res.data]);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default CreateStudent;
