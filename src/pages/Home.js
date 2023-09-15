import React from "react";
import FAQList from "./FAQList";
import logo from "../img/logo_02_1.png";
import main_human1 from "../img/messages1.png";
import main_human2 from "../img/mainimage(big).png";
import review1protect from "../img/review1Protect.png";
import review2protect from "../img/review2Protect.png";

import kakaotalk from "../img/kakaotalk.png";
import review1Score from "../img/4.6STAR.png";
import review2Score from "../img/4.7STAR.png";
import "../css_combine/css_mobile/home_mobile.css";
import "../css_combine/home.css"; // 상대 경로 사용
import { Link } from "react-router-dom";
import reviewmaineffect from "../img/reviewmaineffect.png";
import increasearrow from "../img/increasearrow.png";
import green_boxImage1 from "../img/Vector.png";
import green_boxImage2 from "../img/Vector (1).png";
import logo_footer from "../img/logo_02_3 1.png";

function Home() {
  const imgData = {
    images: [
      "Market1",
      "Market2",
      "Market3",
      "Market4",
      "Market5",
      "Market6",
      "Market7",
      "Market8",
      "Market9",
      "Market10",
    ],
  };

  // (2)서비스 안내 버튼 클릭 시 스크롤 처리 함수
  const scrollToinform = () => {
    const greenNavHeight = document.querySelector(".green-nav").offsetHeight;
    const blackBoxElement = document.querySelector(".black-background");
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
        <div className="copycontainer_default">
          <div className="total-content">
            <div className="text-content">
              <p className="desktop-home-text1">
                N개의 채널 속 리뷰들 <br />
                <span className="lowest-price-text">최저가</span>로 모아드려요
              </p>
              <p className="desktop-home-text2">
                수많은 판매채널에 흩어져있는 리뷰들,
                <br />
                한곳에 모아 구매전환률을 높이세요!
              </p>
            </div>
            <div className="home-buttoncontainer">
              <button className="custom-button1">
                <Link
                  to="/desktopinform"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  서비스 신청
                </Link>
              </button>
              <button className="custom-button2" onClick={scrollToinform}>
                서비스 안내
              </button>
            </div>
          </div>
        </div>
        <img src={main_human1} alt="이미지" className="main_human1" />
        <img src={main_human2} alt="이미지" className="main_human2" />
      </div>

      <div className="black-background">
        <p className="page2maintext">
          같은 상품도 더 잘팔리는 이유, <br />
          리뷰에 있습니다
        </p>
        <img
          src={kakaotalk}
          alt="kakaotalkchat"
          className="kakaotalk"
          onClick={openKakaoTalkChat}
        />
        <div className="reviews">
          <div className="review1">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={review1protect}
                alt="review1protect"
                className="review1protect"
              />
            </div>
            <div className="review1_line1">
              <span className="review1_name">액정보호방탄필름</span>
              <img
                src={review1Score}
                alt="review1Score"
                className="review1score"
              />
            </div>
            <div className="review1_line2">
              <span className="review1_name">9900원</span>
              <div className="review1_amount">
                <span></span>리뷰 4,546개
              </div>
            </div>
          </div>
          <div className="review2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={review2protect}
                alt="review2protect"
                className="review2protect"
              />
            </div>
            <div className="review2_line1">
              <span className="review2_name">액정보호방탄필름</span>
              <img
                src={review2Score}
                alt="review2Score"
                className={review2Score}
              />
            </div>
            <div className="reivew2_line2">
              <span className="review2_name">9900원</span>
              <div className="review2_amount">
                <span></span>리뷰 6개
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FAQfooterbackground"></div>
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