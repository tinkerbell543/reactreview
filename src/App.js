import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import DesktopInform from "./pages/DesktopInform";
import MobileInform from "./pages/MobileInform"; // 컴포넌트 이름 PascalCase로 변경

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desktopinform" element={<DesktopInform />} />
        <Route path="/mobileinform" element={<MobileInform />} />
      </Routes>
    </div>
  );
}

export default App;
