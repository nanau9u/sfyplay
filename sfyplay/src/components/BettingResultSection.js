import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

function BettingResultSection() {
  // 더미 데이터
  const results = [
    {
      id: 1,
      title: "베팅 결과 발표!",
      content: "슬라이드 페이지 형식으로 반별 대항도 이곳에서 출력",
      color: "#ffc107" // warning color
    },
    {
      id: 2,
      title: "우리 반은 무슨 메뉴를 먹었을까?",
      content: "서울 3반이 가장 많이 먹은 메뉴는 설렁탕입니다! 오늘 총 23,543kal을 섭취했어요! 돼지 한 마리에 해당하는 분량이에요.",
      color: "#17a2b8" // info color
    }
  ];

  return (
    <Carousel controls={false} indicators={false} interval={5000} className="w-100 h-100">
      {results.map(result => (
        <Carousel.Item key={result.id}>
          <Card
            className="text-center text-white d-flex align-items-center justify-content-center h-100 p-3 shadow-sm"
            style={{ backgroundColor: result.color, border: 'none', minHeight: '150px' }}
          >
            <Card.Body>
              <h4 className="fw-bold mb-2">{result.title}</h4>
              <p className="mb-0">{result.content}</p>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BettingResultSection;