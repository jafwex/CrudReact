import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://67da45f535c87309f52bbd21.mockapi.io/api/hello/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
