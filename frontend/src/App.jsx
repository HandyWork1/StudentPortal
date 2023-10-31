import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import StudentDashboard from "./routes/studentDashboard/studentDashboard";
import Header from "./componets/Header";
//import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Router>
        {Header}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
