import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import FormActionPage from "./pages/form-action";
import Navbar from "./component/layout/navbar";
import HomePage from "./pages/home";
function App() {

  return (
    <Router>
         <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/form-action" element={<FormActionPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
