import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import FormActionPage from "./pages/form-action";
import Navbar from "./component/layout/navbar";
import PageLayout from "./component/layout/PageLayout";
import HomePage from "./pages/home";
import TransitionPage from "./pages/transition";
import { UseHookPage } from "./pages/use-hook";
import OptimisticPage from "./pages/optimistic";
import MetaData from "./pages/meta-data";
import ForwardRefPage from "./pages/forward-ref";
function App() {

  return (
    <Router>
      <Navbar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/form-action" element={<FormActionPage />} />
          <Route path="/docs/transition" element={<TransitionPage />} />
          <Route path="/docs/use-hook" element={<UseHookPage />} />
          <Route path="/docs/optimistic" element={<OptimisticPage />} />
          <Route path="/docs/meta-data" element={<MetaData />} />
          <Route path="/docs/forward-ref" element={<ForwardRefPage />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}

export default App
