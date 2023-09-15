import "./App.css";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DesktopInform from "./pages/DesktopInform";
import MobileHome from "./pages/mobileHome";

function App() {
  const navigate = useNavigate();
  /* 일단 다 만들고 설정하자!
  useEffect(() => {
    const handleResize = () => {
      // 현재 뷰포트의 너비를 가져옵니다.
      const viewportWidth = window.innerWidth;

      // 뷰포트 너비가 680px 이하이면 "/Mobile" 경로로 리다이렉트, 그 이상이면 "/" 경로로 리다이렉트합니다.
      if (viewportWidth <= 680) {
        navigate("/Mobile");
      } else {
        navigate("/");
      }
    };

    // 초기 로딩 및 화면 크기 변경 시 리사이즈 이벤트 핸들러를 호출합니다.
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);
*/
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desktopinform" element={<DesktopInform />} />
        <Route path="/Mobile" element={<MobileHome />} />
      </Routes>
    </div>
  );
}

export default App;
