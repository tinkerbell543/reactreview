import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DesktopInform from "./pages/DesktopInform"; // DesktopInform 컴포넌트의 경로를 맞게 설정

function App() {
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
