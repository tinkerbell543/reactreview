import "./App.css";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DesktopInform from "./pages/DesktopInform";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desktopinform" element={<DesktopInform />} />
      </Routes>
    </div>
  );
}

export default App;
