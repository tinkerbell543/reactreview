import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Helmet } from "react-helmet-async";
import back_arrow from "../img/akar-icons_cross.png";
import "../css_combine/css_mobile/mobile_inform.css";

const MobileInform = () => {
  const navigate = useNavigate();
  const [name1, setName1] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [detail, setDetail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false); // 추가: 버튼 클릭 여부 상태
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async () => {
    setSubmitClicked(true); // "문의하기" 버튼 클릭 시 상태 변경
    if (
      !name1 ||
      !phone1 ||
      !phone2 ||
      !phone3 ||
      !email1 ||
      !email2 ||
      !detail ||
      nameError ||
      phoneError ||
      emailError
    ) {
      console.error("입력 값이 유효하지 않습니다.");
      return; // 모든 필드가 채워지지 않은 경우 함수 종료
    }
    try {
      const timestamp = serverTimestamp();

      // 문의 정보를 contacts 컬렉션에 추가
      await addDoc(collection(db, "contacts"), {
        name: name1,
        phone: `${phone1}-${phone2}-${phone3}`,
        email: `${email1}@${email2}`,
        detail,
        created_time: timestamp,
      });

      console.log("문의가 성공적으로 저장되었습니다.");

      setShowPopup(true);

      setName1("");
      setPhone1("");
      setPhone2("");
      setPhone3("");
      setEmail1("");
      setEmail2("");
      setDetail("");
      // 문의가 성공적으로 저장되었으므로 에러 메시지 초기화
      setNameError("");
      setPhoneError("");
      setEmailError("");
      setSubmitClicked(false); // 초기화 후 다시 버튼 클릭을 위해 상태 변경
    } catch (error) {
      console.error("문의 저장 중 오류 발생:", error);
    }
  };
  const handleNameChange = (event) => {
    const newValue = event.target.value;
    setName1(newValue);

    // 패턴 검증
    const pattern = /^[가-힣a-zA-Zㄱ-ㅎㅏ-ㅣ\s]{1,15}$/;
    if (!pattern.test(newValue)) {
      setNameError("짧은 한글, 영어만 가능합니다.");
    } else {
      setNameError(""); // 올바른 형식의 입력인 경우 에러 메시지 초기화
    }
  };

  const handlePhoneChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    // 정규식을 사용하여 숫자만 허용
    const numberPattern = /^[0-9]*$/;

    if (id === "phone1") {
      // phone1 필드에서는 숫자만 허용하고, 3자리 이상 입력시 유효성 검사를 수행합니다.
      if (!numberPattern.test(value)) {
        return;
      } else if (
        !["010", "011", "016", "017", "018", "019"].includes(
          value.substring(0, 3)
        )
      ) {
        // 앞 3자리가 유효한 휴대폰 번호가 아닌 경우 에러 메시지를 설정
        setPhoneError("유효한 휴대폰 번호가 아닙니다.");
      } else {
        // 유효한 값이 입력되면 에러 메시지 초기화
        setPhoneError("");
      }
      // 입력 값을 상태 변수에 설정
      setPhone1(value.replace(/[^0-9]/g, "")); // 숫자 이외의 문자는 제거하여 설정
    } else if (id === "phone2" || id === "phone3") {
      if (!numberPattern.test(value)) {
        return; // 숫자가 아닌 입력은 무시
      }
      if (id === "phone2") {
        setPhone2(value);
      } else if (id === "phone3") {
        setPhone3(value);
      }
    }
  };

  const handleEmailChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    // 이메일 형식 검증
    const emailPattern = /^[a-zA-Z0-9!#$%^&*()_+{}[\]:;<>,.?~\\-]+$/;

    // email2 입력 필드의 값이 "."을 포함하는지 검사
    const email2Valid = value.includes(".");

    if (!emailPattern.test(value) || !email2Valid) {
      setEmailError(
        <div>
          이메일 형식이 맞지 않습니다
          <br />
          예시:abc123@naver.com
        </div>
      );
    } else {
      setEmailError(""); // 올바른 형식의 입력인 경우 에러 메시지 초기화
    }

    // 입력 값을 상태 변수에 설정
    if (id === "email1") {
      setEmail1(value);
    } else if (id === "email2") {
      setEmail2(value);
    }
  };
  const handleDetailChange = (event) => {
    const value = event.target.value;
    setDetail(value);
  };

  return (
    <div>
      <Helmet>
        <title>리뷰쏙-문의사항 접수</title>
      </Helmet>
      <div className="white_background">
        <div className="totalContainer">
          <div className="inform_container">
            <div className="inform_Text2">
              <span className="inform_Text1">서비스 문의</span>
              <br />
              문의를 남겨주시면
              <br />
              빠르게 확인 후 답변 드리겠습니다
            </div>
            <img
              src={back_arrow}
              alt="이미지"
              className="back_arrow"
              onClick={() => navigate(-1)}
            />
          </div>
          <div>
            <span className="title_style">이름 *</span>
            <div className="name_combo">
              <input
                type="text"
                className={`textField_name ${nameError ? "nameError" : ""}`}
                id="name"
                value={name1}
                onChange={handleNameChange}
                autoComplete="off" // 자동완성 비활성화
              />
              {nameError && <span className="nameError">{nameError}</span>}
            </div>
          </div>
          <div>
            <span className="title_style">휴대폰 번호 *</span>
            <div className="phone_combo">
              <input
                type="tel"
                id="phone1"
                className={`textField_phone ${phoneError ? "phoneError" : ""}`}
                value={phone1}
                onChange={handlePhoneChange}
                maxLength="3"
                autoComplete="off" // 자동완성 비활성화
              />
              <span>-</span>
              <input
                type="tel"
                id="phone2"
                className="textField_phone"
                value={phone2}
                onChange={handlePhoneChange}
                maxLength="4"
                autoComplete="off" // 자동완성 비활성화
              />
              <span>-</span>
              <input
                type="tel"
                id="phone3"
                className="textField_phone"
                value={phone3}
                onChange={handlePhoneChange}
                maxLength="4"
                autoComplete="off" // 자동완성 비활성화
              />
            </div>
            {phoneError && <span className="phoneError">{phoneError}</span>}
          </div>
          <div>
            <span className="title_style"> 이메일 *</span>
            <div className="email_combo">
              <input
                type="email"
                id="email1"
                style={{ marginRight: "4px" }}
                className={`textField_email ${emailError ? "emailError" : ""}`}
                value={email1}
                onChange={handleEmailChange}
                autoComplete="off" // 자동완성 비활성화
              />
              <span>@</span>
              <input
                type="email"
                id="email2"
                style={{ marginLeft: "3px" }}
                className={`textField_email ${emailError ? "emailError" : ""}`}
                value={email2}
                onChange={handleEmailChange}
                autoComplete="off" // 자동완성 비활성화
              />
            </div>
            {emailError && <span className="emailError">{emailError}</span>}
          </div>
          <div>
            <span className="title_style">문의사항 *</span>
            <textarea
              id="detail"
              className={`textField_detail`}
              value={detail}
              onChange={handleDetailChange}
              autoComplete="off" // 자동완성 비활성화
              style={{ zIndex: 3, resize: "none" }}
            />
          </div>
          <div className="button-container">
            <button
              className="inform-button1"
              style={{ marginTop: "7px" }}
              onClick={handleFormSubmit}
            >
              <span style={{ textDecoration: "none", color: "inherit" }}>
                문의하기
              </span>
            </button>

            {showPopup && (
              <div className="popup-background">
                <div className="popup">
                  <p>
                    문의 접수가 완료되었습니다!
                    <br />
                    확인 후 답변 드리겠습니다.
                  </p>
                  <button onClick={() => setShowPopup(false)}>확인</button>
                </div>
              </div>
            )}
          </div>
          <div style={{ fontSize: "11px", color: "red", marginTop: "5px" }}>
            {submitClicked && !name1 && "이름: 필수 정보입니다."}

            {submitClicked &&
              (!phone1 || !phone2 || !phone3) &&
              "휴대폰 번호: 필수 정보입니다."}
            <br />
            {submitClicked &&
              (!email1 || !email2) &&
              "이메일: 필수 정보입니다."}

            {submitClicked && !detail && "문의사항: 필수 정보입니다."}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileInform;
