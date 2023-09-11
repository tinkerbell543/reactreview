import React from "react";
import logo from "../img/logo_02 1.png";
import image from "../img/messages1.png";
import { useEffect, useState } from "react";
import kakaotalk from "../img/kakaotalk.png";
import "../css/appbar.css";
import "../css/fab.css";
import "../css/1page.css";
import "../css/2page.css";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  // (1)첫페이지 사람이미지 위치조절함수: 화면 가로길이 상태값 초기화
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기가 변경될 때 화면 가로길이 업데이트
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 이미지 위치를 동적으로 계산
  const imageRight = windowWidth > 1440 ? "8%" : "-1%";

  // (2)서비스 안내 버튼 클릭 시 스크롤 처리 함수
  const scrollToinform = () => {
    const greenNavHeight = document.querySelector(".green-nav").offsetHeight;
    const blackBoxElement = document.querySelector(".black-box");
    if (blackBoxElement) {
      const targetScrollPosition = blackBoxElement.offsetTop - greenNavHeight;
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  //카카오톡상담연결 함수
  const openKakaoTalkChat = () => {
    const url = "http://pf.kakao.com/_hSClG/chat";
    const width = 400; // 원하는 폭
    const height = 600; // 원하는 높이
    window.open(url, "KakaoChatPopup", `width=${width},height=${height}`);
  };
  return (
    <div>
      <AppBar></AppBar>
      <div className="green-background">
        <div className="copycontainer">
          <div className="total-content">
            <div className="text-content">
              <p className="desktop-home-text1">
                N개의 채널 속 리뷰들 <br />
                <span className="lowest-price-text">최저가</span>로 모아드려요
              </p>
              <p className="desktop-home-text2" style={{ marginTop: "28px" }}>
                수많은 판매채널에 흩어져있는 리뷰들,
                <br />
                한곳에 모아 구매전환률을 높이세요!
              </p>
            </div>
            <div className="home-buttoncontainer" style={{ marginTop: "39px" }}>
              <button className="custom-button1">서비스 신청</button>
              <button className="custom-button2" onClick={scrollToinform}>
                서비스 안내
              </button>
            </div>
          </div>
        </div>
        <img
          src={image}
          alt="이미지"
          className="image"
          style={{ right: imageRight }}
        />
      </div>
      <div className="black-background">
        <p className="page2maintext" style={{ marginTop: "39px" }}>
          같은 상품도 더 잘팔리는 이유, <br />
          리뷰에 있습니다
        </p>
        <img
          src={kakaotalk}
          alt="kakaotalkchat"
          className="kakaotalk"
          onClick={openKakaoTalkChat}
        />
        <div className="copycontainer1" style={{ marginTop: "32px" }}>
          asas
        </div>
      </div>
    </div>
  );
}
function AppBar() {
  return (
    <div className="green-nav">
      <div className="nav-content">
        <img src={logo} alt="로고 이미지" className="logo" />
        <h1 className="nav-text">
          <Link to="/desktopinform" className="nav-text">
            문의하기
          </Link>
        </h1>
      </div>
    </div>
  );
}
export default Home;
