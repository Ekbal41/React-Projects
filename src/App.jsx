import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Calculetor from "./pages/Calculetor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calculetor" element={<Calculetor />} />
      </Routes>
    </Router>
  );
}

export default App;
