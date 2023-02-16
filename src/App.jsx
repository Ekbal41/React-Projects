import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Calculetor from "./pages/Calculetor";
import Chatbot from "./pages/Chatbot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calculetor" element={<Calculetor />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
