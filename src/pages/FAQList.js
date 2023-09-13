import React, { useState } from "react";

function FAQSection({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // question에서 "Q"를 분리
  const questionParts = question.split(" ");
  const questionPrefix = questionParts[0]; // "Q"
  const questionText = questionParts.slice(1).join(" "); // 나머지 부분

  return (
    <div className="faq-section" onClick={toggleExpansion}>
      <div className="question">
        <span className="question-prefix">{questionPrefix}</span>
        {questionText}
        <span className={`arrow ${isExpanded ? "expanded" : ""}`}></span>
      </div>
      {isExpanded && <div className="answer">{answer}</div>}
    </div>
  );
}
const faqData = [
  {
    question: "Q 리뷰쏙을 이용하려면 설치해야하나요?",
    answer: (
      <div>
        설치가 필요하지 않습니다!
        <br />
        서비스 신청 시 리뷰쏙에서 자체적인 리뷰 이관 작업이 이루어집니다.
      </div>
    ),
  },
  {
    question: "Q 내 스마트스토어로 수집된 리뷰를 옮기는게 가능한가요?",
    answer: (
      <div>
        자사몰에만 리뷰 이관이 가능합니다.
        <br />
        스마트스토어나 오픈마켓 등은 리뷰 이관이 불가능합니다.
        <br />
        <br />
        리뷰이관 가능O
        <br />
        자사몰 / 오픈마켓 / 스마트스토어 자사몰
        <br />
        <br />
        리뷰이관 불가능X
        <br />
        자사몰 / 오픈마켓 / 스마트스토어 오픈마켓 / 스마트스토어
      </div>
    ),
  },
  {
    question: "Q 새로 추가된 상품의 리뷰도 추가로 수집할 수 있나요?",
    answer: (
      <div>
        리뷰 이관은 신청 시의 정보를 기준으로 합니다.
        <br />
        따라서 이관 이후 추가요청된 상품의 경우, 서비스 재문의가 필요합니다.
      </div>
    ),
  },
  {
    question: "Q 부정적인 내용이 포함된 리뷰를 필터링할 수 있나요?",
    answer: (
      <div>
        가능합니다. <br />
        부정적인 내용을 거른 리뷰 이관이 필요한 경우, 서비스 신청시에
        말씀해주세요.
        <br />그 외 서비스 신청시에 필터링이 필요한 키워드나
        <br />
        이관을 원하지 않는 특정 리뷰가 있다면 함께 문의주시기 바랍니다.
      </div>
    ),
  },
  // 추가 FAQ 항목들
];

function FAQList() {
  return (
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <FAQSection key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQList;
