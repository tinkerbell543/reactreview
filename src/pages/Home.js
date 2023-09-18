import React, { useState, useEffect } from "react";
import FAQList from "./FAQList";
import logo from "../img/logo_02_1.png";
import main_human1 from "../img/messages1.png";
import main_human2 from "../img/mainimage(big).png";
import review1protect from "../img/review1Protect.png";
import review2protect from "../img/review2Protect.png";
import review_effect_mobile from "../img/buy(mobile).png";
import kakaotalk from "../img/kakaotalk_fit.png";
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
  const [appWidth, setAppWidth] = useState(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 창 크기가 변경될 때마다 호출되는 함수
  function handleResize() {
    setWindowWidth(window.innerWidth);
    setAppWidth(document.querySelector(".App").clientWidth);
  }

  // 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 전달하여 이펙트가 처음 한 번만 실행되도록 함
  console.log("windowWidth:", windowWidth);
  console.log("appWidth:", appWidth);
  // appWidth 상태에 따라 다른 경로 생성
  const path = appWidth <= 680 ? "/mobileinform" : "/desktopinform";

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
    <div style={{ minWidth: "1235px" }}>
      <AppBar></AppBar>
      <AppBarMobile></AppBarMobile>
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
                <Link to={path} className="custom-button1-text">
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
                className="review2score"
                src={review2Score}
                alt="review2Score"
              />
            </div>
            <div className="review2_line2">
              <span className="review2_name">9900원</span>
              <div className="review2_amount">
                <span></span>리뷰 6개
              </div>
            </div>
          </div>
          <div className="revieweffect">
            <img
              src={increasearrow}
              alt="increasearrow"
              className="increasearrow1"
            />
            <img
              src={reviewmaineffect}
              alt="reviewmaineffect"
              className="reviewmaineffect"
            />
            <img
              src={increasearrow}
              alt="increasearrow.png"
              className="increasearrow2"
            />
            <img
              src={review_effect_mobile}
              alt="review_effect"
              className="review_effect_mobile"
            />
          </div>
          <div className="noReviewEffect">구매율 저조</div>
        </div>
      </div>
      <div className="FAQfooterbackground">
        <div className="reviewMarketBorder">
          <p className="page3maintext">바로 리뷰 수집이 가능한 마켓</p>
          <div className="grid_container">
            {imgData.images.map((_, index) => (
              <div key={index}>
                <img
                  src={require(`../img/Market${index + 1}.png`)}
                  alt={`Market ${index + 1}`}
                  className="grid_item"
                />
              </div>
            ))}
          </div>
          <p className="page3bottomtext">더 많은 마켓이 추가될 예정입니다</p>
        </div>
        <div className="grey-background">
          <p className="page4maintext">자주 묻는 질문 </p>
          <FAQList />
        </div>
        <div className="container">
          <div className="grey-supportbackground">아아</div>
          <div className="black-supportbackground">아아</div>
          <div className="green-box">
            <div className="green-boxContent">
              <span className="green-boxText">
                더 궁금하신 점이 있으신가요?
              </span>
              <div className="green-boxButton">
                <Link
                  to={path}
                  className="green-boxButton"
                  style={{ margin: "0px" }}
                >
                  문의하기
                </Link>
              </div>
              <img
                className="green_boxImage1"
                src={green_boxImage1}
                alt="Top Left"
              />
              <img
                className="green_boxImage2"
                src={green_boxImage2}
                alt="Bottom Right"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <img className="logo_footer" src={logo_footer} alt="logo_footer" />
          <div>
            <span className="footer_gap">법인 : 주식회사 테크프리</span>
            <span className="footer_gap">|</span>{" "}
            <span className="footer_gap">대표 : 김도언</span>
            <span className="footer_gap">| </span>{" "}
            <span className="footer_gap">이용약관</span>{" "}
            <span className="footer_gap">|</span> 개인정보 처리방침
            <span className="footer_gap">
              <br />
              사업자등록번호 : 779-88-02908
            </span>{" "}
            <span className="footer_gap">| </span>{" "}
            <span className="footer_gap">
              주소 : 서울특별시 서초구 사임당로8길 13, 4층 402호 에이514(서초동,
              제일빌딩){" "}
            </span>
            |
          </div>
        </div>
        <div className="footer_mobile">
          <img className="logo_footer" src={logo_footer} alt="logo_footer" />
          법인 : 주식회사 테크프리 | 대표 : 김도언 | 이용약관 | 개인정보
          처리방침
          <br />
          사업자등록번호 : 779-88-02908 |<br /> 주소 : 서울특별시 서초구
          사임당로8길 13, 4층 402호 에이514(서초동, 제일빌딩) |
        </div>
      </div>
    </div>
  );
}
function AppBar() {
  return (
    <div style={{ minWidth: "1216px" }} className="green-nav">
      <div className="nav-content">
        <img src={logo} alt="로고 이미지" className="logo" />
        <h1 className="nav-text">
          <Link to="desktopinform" className="nav-text">
            문의하기
          </Link>
        </h1>
      </div>
    </div>
  );
}

function AppBarMobile() {
  return (
    <div className="green-nav_mobile">
      <div className="nav-content">
        <img src={logo} alt="로고 이미지" className="logo" />
        <h1 className="nav-text">
          <Link to="/mobileinform" className="nav-text">
            문의하기
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
