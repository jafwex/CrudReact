// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentProvider from "./components/StudentContext";
import StudentList from "./components/StudentList";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
