import React from "react";
import FAQList from "./FAQList";
import logo from "../img/logo_02_1.png";
import main_human from "../img/messages1.png";
import review1protect from "../img/review1Protect.png";
import review2protect from "../img/review2Protect.png";
import { useEffect, useState } from "react";
import kakaotalk from "../img/kakaotalk.png";
import review1Score from "../img/4.6STAR.png";
import review2Score from "../img/4.7STAR.png";
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
              <p className="desktop-home-text2" style={{ marginTop: "28px" }}>
                수많은 판매채널에 흩어져있는 리뷰들,
                <br />
                한곳에 모아 구매전환률을 높이세요!
              </p>
            </div>
            <div className="home-buttoncontainer" style={{ marginTop: "39px" }}>
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
        <img
          src={main_human}
          alt="이미지"
          className="image"
          style={{ right: imageRight }}
        />
      </div>
      <div className="black-background">
        <p className="page2maintext" style={{ marginTop: "56px" }}>
          같은 상품도 더 잘팔리는 이유, <br />
          리뷰에 있습니다
        </p>
        <img
          src={kakaotalk}
          alt="kakaotalkchat"
          className="kakaotalk"
          onClick={openKakaoTalkChat}
        />
        <div className="reviews" style={{ marginTop: "32px" }}>
          <div className="review1">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={review1protect}
                alt="review1protect"
                width="100%"
                height="169"
                style={{ flexShrink: 0 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "25px 30.39px 0 33px",
              }}
            >
              <span className="review1_name">액정보호방탄필름</span>
              <img src={review1Score} alt="review1Score" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 22px 0 33px",
              }}
            >
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
                width="100%"
                height="169"
                style={{ flexShrink: 0 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "25px 30.39px 0 33px",
              }}
            >
              <span className="review2_name">액정보호방탄필름</span>
              <img src={review2Score} alt="review2Score" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 22px 0 33px",
              }}
            >
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
          </div>
          <div className="noRevieEffect">구매율 저조</div>
        </div>
      </div>
      <div className="FAQfooterbackground">
        <div className="reviewMarketBorder" style={{ marginBottom: "66px" }}>
          <p className="page3maintext" style={{ marginTop: "56px" }}>
            바로 리뷰 수집이 가능한 마켓
          </p>
          <div className="grid_container">
            {imgData.images.map((_, index) => (
              <div key={index} className="grid_item">
                <img
                  src={require(`../img/Market${index + 1}.png`)}
                  alt={`Market ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <p className="page3bottomtext" style={{ marginTop: "154px" }}>
            더 많은 마켓이 추가될 예정입니다
          </p>
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
                <Link to="/desktopinform" className="green-boxButton">
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
          법인 : 주식회사 테크프리 | 대표 : 김도언 | 이용약관 | 개인정보
          처리방침
          <br />
          사업자등록번호 : 779-88-02908 | 주소 : 서울특별시 서초구 사임당로8길
          13, 4층 402호 에이514(서초동, 제일빌딩) |{" "}
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
