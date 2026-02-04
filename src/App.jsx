import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import FormActionPage from "./pages/form-action";
import Navbar from "./component/layout/navbar";
import HomePage from "./pages/home";
import TransitionPage from "./pages/transition";
import { UseHookPage } from "./pages/use-hook";
import OptimisticPage from "./pages/optimistic";
function App() {

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/form-action" element={<FormActionPage />} />
          <Route path="/docs/transition" element={<TransitionPage />} />
          <Route path="/docs/use-hook" element={<UseHookPage />} />
          <Route path="/docs/optimistic" element={<OptimisticPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
